import React, { useContext, useState } from "react";
import { useQuery, useReactiveVar } from "@apollo/client";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Autocomplete, MenuItem, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { EditorState } from "draft-js";
import { Calendar } from "react-calendar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PhoneInput from "react-phone-input-2";

import { FM } from "./FormModalStyle";
import CloudinaryFunction from "../../constants/CloudinaryFunction";
import { blue } from "@mui/material/colors";
import UserGroupModal from "../userGroupModal/UserGroupModal";
import UserGroup from "../../modules/settings/userGroup/UserGroup";
import { GET_EDIT_DATA } from "../../lib/queries/AllQueries";
import {
  openModal,
  updateFlag,
  editData,
  userGroupData,
  imageUrl,
  valTel,
  emailVal
} from "../../lib/reactivities/reactiveVarables";
import { useFormModal } from "./useFormModal";

export default function FormModal({
  formInputs,
  ctaFormHandler,
  ctaUpdateHandler,
  handleChange,
  onDateChange,
  date,
}) {
  const [{emailHandler, focus, setFocus, emailError}] = useFormModal()
  const [ctaImageUpdateHandler] = CloudinaryFunction();
  const [open, setOpen] = useState(false);
  const [editName, setEditName] = useState("");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [contact, setContact] = useState("");
  var openFormModal = useReactiveVar(openModal);
  var modalUpdateFlag = useReactiveVar(updateFlag);
  var useEditData = useReactiveVar(editData);
  var useValTel = useReactiveVar(valTel);
  console.log("Edit data in modal", useEditData);
  // const {
  //   data: EDIT_DATA,
  //   loading: EDIT_LOADING,
  //   editError
  // } = useQuery(GET_EDIT_DATA);
  // const useEditData = EDIT_DATA.editData
  // console.log("query data in form modal", useEditData);

  const handleChangePhone = (phone) => {
    valTel(phone);
  };
  const handleCloseUpdate = () => {
    openModal(false);
    updateFlag(false);
    editData({});
    userGroupData({});
    imageUrl("");
    valTel("");
    emailVal("")
  };

  return (
    <div>
      <Dialog
        open={openFormModal}
        onClose={handleCloseUpdate}
        fullScreen={fullScreen}
        fullWidth={true}
        BackdropProps={{
          style: {
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(8px)",
          },
        }}
      >
        <DialogTitle>
          {modalUpdateFlag ? <p>Update</p> : <p>Add</p>}
          <IconButton
            aria-label="close"
            onClick={handleCloseUpdate}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {/* <DialogContentText>
                Please read carefully and fill all required fields.
              </DialogContentText> */}
          <Box>
            {formInputs.map((item, index) => {
              // const test = state.editData;
              const test = useEditData;
              return (
                <>
                  {item.type === "number" ? (
                    <FM.TextInput
                      InputLabelProps={{ shrink: true }}
                      InputProps={{
                        disableUnderline: true,
                        inputProps: { min: 0 },
                      }}
                      margin="dense"
                      id="file"
                      label={item.label}
                      name={item.name}
                      type={item.type}
                      required
                      fullWidth
                      variant="standard"
                      defaultValue={
                        modalUpdateFlag
                          ? item.name === "file"
                            ? ""
                            : useEditData[item.name]
                          : null
                      }
                      onChange={(e) => {
                        test[item.name] =
                          item.name === "file"
                            ? e.target.files[0].name
                            : e.target.value;
                        editData(test);
                      }}
                    />
                  ) : item.type === "roleSelect" ? (
                    <>
                      <FM.TextInput
                        InputLabelProps={{ shrink: true }}
                        InputProps={{ disableUnderline: true }}
                        margin="dense"
                        select
                        id="file"
                        label={item.label}
                        name={item.name}
                        type={item.type}
                        required
                        fullWidth
                        // variant="standard"
                        onChange={(e) => {
                          test[item.name] = e.target.value;
                          editData(test);
                          console.log("pp", test);
                        }}
                      >
                        {item?.dropDownUserGroup?.map((option) => (
                          <MenuItem key={option?.id} value={option?.id}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "100%",
                              }}
                            >
                              <div>{option?.userName}</div>
                              <div
                                style={{
                                  fontSize: "10px",
                                  color: "gray",
                                  float: "right",
                                }}
                              >
                                {option?.userGroupRole}
                              </div>
                            </div>
                          </MenuItem>
                        ))}
                      </FM.TextInput>
                    </>
                  ) : item.type === "select" ? (
                    <>
                      <FormLabel
                        required
                        id="demo-row-radio-buttons-group-label"
                      >
                        {item.label}
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={(e) => {
                          test[item.name] = e.target.value;
                          editData(test);
                          // console.log('pp', test);
                        }}
                      >
                        {item?.dropDownContent?.map((option) => (
                          <FormControlLabel
                            value={option}
                            control={<Radio />}
                            label={option}
                          />
                        ))}
                      </RadioGroup>
                    </>
                  ) : item.type === "editor" ? (
                    <Editor
                      // editorState={state.editData[item.name]}
                      editorState={useEditData[item.name]}
                      onEditorStateChange={(getText) => {
                        test[item.name] = getText;
                        editData(test);
                      }}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      toolbar={{
                        inline: { inDropdown: true },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                        history: { inDropdown: true },
                        blockType: {
                          className: "bordered-option-classname",
                        },
                        fontSize: {
                          className: "bordered-option-classname",
                        },
                        fontFamily: {
                          className: "bordered-option-classname",
                        },
                      }}
                    />
                  ) : item.type === "upload" ? (
                    <div style={{ marginTop: 13, marginBottom: -30 }}>
                      <input type="file" onChange={ctaImageUpdateHandler} />
                    </div>
                  ) : item.type === "selectCategory" ? (
                    <>
                      <FormLabel
                        required
                        id="demo-row-radio-buttons-group-label"
                      >
                        {item.label}
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={(e) => {
                          test[item.name] = e.target.value;
                          editData(test);
                        }}
                      >
                        {item?.dropDown?.categories?.map((option) => (
                          <FormControlLabel
                            value={option.id}
                            control={<Radio />}
                            label={option.categoryName}
                          />
                        ))}
                      </RadioGroup>
                    </>
                  ) : item.type === "selectInstructor" ? (
                    <>
                      <FormLabel
                        required
                        id="demo-row-radio-buttons-group-label"
                      >
                        {item.label}
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={(e) => {
                          test[item.name] = e.target.value;
                          editData(test);
                        }}
                      >
                        {item?.dropDown?.map((option) => (
                          <FormControlLabel
                            value={option.id}
                            control={<Radio />}
                            label={option.name}
                          />
                        ))}
                      </RadioGroup>
                    </>
                  ) : item.type === "selectSpeaker" ? (
                    <>
                      <FormLabel
                        required
                        id="demo-row-radio-buttons-group-label"
                      >
                        {item.label}
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={(e) => {
                          test[item.name] = e.target.value;
                          editData(test);
                        }}
                      >
                        {item?.dropDown?.map((option) => (
                          <FormControlLabel
                            value={option.id}
                            control={<Radio />}
                            label={option.speakerName}
                          />
                        ))}
                      </RadioGroup>
                    </>
                  ) : item.type === "selectCourse" ? (
                    <>
                      <FormLabel
                        required
                        id="demo-row-radio-buttons-group-label"
                      >
                        {item.label}
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={(e) => {
                          test[item.name] = e.target.value;
                          editData(test);
                        }}
                      >
                        {item?.dropDown?.findManyCourses?.map((option) => (
                          <FormControlLabel
                            key={option.id}
                            value={option.id}
                            control={<Radio />}
                            label={option.courseName}
                          />
                        ))}
                      </RadioGroup>
                    </>
                  ) : item.type === "tabsPermissions" ? (
                    <UserGroup />
                  ) : item.type === "selectBatch" ? (
                    <>
                      <FormLabel
                        required
                        id="demo-row-radio-buttons-group-label"
                      >
                        {item.label}
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={(e) => {
                          test[item.name] = e.target.value;
                          editData(test);
                        }}
                      >
                        {item?.dropDown?.map((option) => (
                          <FormControlLabel
                            key={option.id}
                            value={option.id}
                            control={<Radio />}
                            label={option.courseName}
                          />
                        ))}
                      </RadioGroup>
                    </>
                  ) : item.type === "selectUser" ? (
                    <>
                      <FormLabel
                        required
                        id="demo-row-radio-buttons-group-label"
                      >
                        {item.label}
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={(e) => {
                          test[item.name] = e.target.value;
                          editData(test);
                        }}
                      >
                        {item?.dropDown?.map((option) => (
                          <FormControlLabel
                            key={option.id}
                            value={option.id}
                            control={<Radio />}
                            label={option.name}
                          />
                        ))}
                      </RadioGroup>
                    </>
                  ) : item.type === "booleanSelection" ? (
                    <>
                      <FormLabel
                        required
                        id="demo-row-radio-buttons-group-label"
                      >
                        {item.label}
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={(e) => {
                          test[item.name] = e.target.value;
                          editData(test);
                        }}
                      >
                        {item?.dropDown?.map((option) => (
                          <FormControlLabel
                            key={option}
                            value={option}
                            control={<Radio />}
                            label={option}
                          />
                        ))}
                      </RadioGroup>
                    </>
                  ) : item.type === "calender" ? (
                    <>
                      <button onClick={() => setOpen(true)}>Select Date</button>
                      <>
                        {open ? (
                          <Calendar
                            onChange={onDateChange}
                            value={date}
                            showNeighboringMonth={false}
                            locale={"en-US"}
                          />
                        ) : (
                          ""
                        )}
                      </>
                    </>
                  ) : item.type === "contact" ? (
                    <>
                      <FM.PhoneField
                        placeholder="Enter phone number"
                        value={modalUpdateFlag ? useEditData[item.name] : null}
                        onChange={(phone) => handleChangePhone(phone)}
                        country="pk"
                        inputStyle={{
                          width: "100%",
                        }}
                      />
                      {/* <input type="tel" /> */}
                    </>
                  ) : item.type === "email" ? (
                    <>
                      <FM.TextInput
                        emailError
                        InputLabelProps={{ shrink: true }}
                        InputProps={{ disableUnderline: true }}
                        margin="dense"
                        id="file"
                        
                        label={!focus ? emailError !== null ? emailError : "Email" : "Email" }
                        name={item.name}
                        type={item.type}
                        required
                        fullWidth
                        onFocus={()=>setFocus(true)}
                        onBlur={()=>setFocus(false)}
                        variant="standard"
                        placeholder="Enter Email"
                      defaultValue={modalUpdateFlag ? useEditData[item.name] : null}
                        onChange={emailHandler}
                      />
                      {/* <input type="tel" /> */}
                    </>
                  ) : (
                    <FM.TextInput
                      InputLabelProps={{ shrink: true }}
                      InputProps={{ disableUnderline: true }}
                      margin="dense"
                      id="file"
                      label={item.label}
                      name={item.name}
                      type={item.type}
                      required
                      fullWidth
                      variant="standard"
                      defaultValue={
                        modalUpdateFlag
                          ? item.name === "file"
                            ? ""
                            : useEditData[item.name]
                          : null
                        // modalUpdateFlag ? item.name === "file" ? "" : state?.editData[item.name] : null
                      }
                      onChange={(e) => {
                        test[item.name] =
                          item.name === "file"
                            ? e.target.files[0].name
                            : e.target.value;
                        editData(test);
                      }}
                    />
                  )}
                  <br />
                </>
              );
            })}
            <br />
          </Box>
          <br />
        </DialogContent>
        <DialogActions>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="flex-end"
            alignItems="center"
          >
            <FM.FormButton
              style={{ color: "#1E86FF" }}
              variant="outlined"
              onClick={handleCloseUpdate}
            >
              Cancel
            </FM.FormButton>
            {modalUpdateFlag ? (
              <FM.FormButton
                style={{ backgroundColor: "#1E86FF" }}
                type="submit"
                variant="outlined"
                onClick={ctaUpdateHandler}
              >
                Update
              </FM.FormButton>
            ) : (
              <FM.FormButton
                style={{ backgroundColor: "#1E86FF" }}
                type="submit"
                variant="outlined"
                onClick={ctaFormHandler}
              >
                Submit
              </FM.FormButton>
            )}
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
}

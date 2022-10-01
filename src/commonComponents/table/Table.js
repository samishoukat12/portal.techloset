//Import from Libraries
import React, { useContext, useState } from "react";
import TableBody from "@mui/material/TableBody";
import TableCell , {tableCellClasses} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddIcon from '@mui/icons-material/Add';
import {
  Toolbar,
  IconButton,
  Typography,
  Tooltip,
  Hidden,
  Button,
  Icon
} from "@mui/material";
import CloudIcon from '../../assets/cloud.png'
import FilterAltIcon from '@mui/icons-material/FilterAlt';

//Import from Files
import GlobalSearch from "../globalSearch/GlobalSearch";
import { TableStyle } from "./TableStyle";
import FormModal from "../formModal/FormModal";
import DropDownMenu from "../dropDownMenu/DropDownMenu";
import { AppContext } from "../../State";
import CommonConfirmModal from "../commonConfirmModal/CommonConfirmModal";
import { logDOM } from "@testing-library/react";
import CommonModal from '../commonModal/CommonModal'
import { isNullableType } from "graphql";
export default function Table({
  title,
  tableHeadings,
  printedKeys,
  formInputs,
  filterdata,
  data,
  date,

  // Handlers
  ctaFormHandler,
  // ctaDeleteHandler,
  ctaUpdateHandler,
  handleChange,
  disableAddIcon,
  onDateChange,
}) {

  const { state, dispatch } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [filterValue, setFilterValue] = useState("");
  const [searchQuery, setSearchQuery] = useState('')
  const [searchShow, setSearchShow] = useState(false)

  const openAnchor = Boolean(anchorEl);
  const handleAnchorClose = (value) => {
    setAnchorEl(null);
    setFilterValue(typeof value == "object" ? filterValue : value);
  };
  //filter data for filters
  const filterDataArray = data?.filter((item) => {
    if (filterValue === "") {
      return item;
    }
    else if (filterValue === item.role) {
      return item;
    }
    else if (filterValue === item.status) {
      return item;
    }
    else if (filterValue === item.courseStatus) {
      return item
    }
    else if (filterValue === item.eventStatus) {
      return item
    }
    else if (filterValue === item.feeStatus) {
      return item
    }
    else if (filterValue === item.attendence) {
      return item
    }
    else if (filterValue === "All") {
      return item;
    }
  });

  //open add form model
  const handleClickOpen = () => {
    dispatch({
      type: "setModal",
      payload: {
        openFormModal: true,
      },
    });
  
  };
  //open edit form modal
  const ctaEditButtonHandler = async (data) => {
    const test = state.editData;
    dispatch({
      type: "setEditId",
      payload: data.id
    })
    dispatch({
      type: "setModal",
      payload: {
        openFormModal: true,
        modalUpdateFlag: true,
      },
    });
    formInputs.map((item) => {
      test[item.name] = data[item.name];
    });
    dispatch({
      type: "setEditData",
      payload: test,
    });
    console.log(state.editId);

  };
  //open dropDown panel
  const handleAnchorClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //close dropDown panel

  const searchingFor = (searchQuery) => {
    return function (data) {
      return (
        (data?.name || data?.courseName || data?.studentName || data?.city || data?.eventName || data?.faqQuestion || data?.speakerName || data?.coursesId || data?.lectureTitle || data?.id).toLowerCase().includes(
          searchQuery?.toLowerCase(),
        )
      );
    };
  };



  const svgIcon = (
    <Icon>
      <img alt="edit" src={CloudIcon} width={20} height={20} />
    </Icon>
  );


  return (
    <>
      {/* Drop Down menu for filter Button */}
      <DropDownMenu
        handleAnchorClose={handleAnchorClose}
        anchorEl={anchorEl}
        openAnchor={openAnchor}
        title={title}
        filterTag={filterdata.filterTag}
      />
      {/* Drop Down menu for filter Button */}

      {/* Form Modal */}
      <FormModal formInputs={formInputs} ctaFormHandler={ctaFormHandler} ctaUpdateHandler={ctaUpdateHandler} handleChange={handleChange} onDateChange={onDateChange} date={date} />
      {/* Form Modal */}

      <Toolbar disableGutters>
        <TableStyle.BoxElement searchShow>
          {/* Table Header For Big Screens */}
          <Hidden smDown>
            <TableStyle.SeachContainer>
              <Typography color={'#121F3E'} variant="h6" component="div" noW3rap={true}>
                {title}
              </Typography>
              <TableStyle.SearchAndBtnsContainer>
                <GlobalSearch
                  onChangeText={(val) => { setSearchQuery(val) }}
                  placeholder="Search here..."
                  searchCancel={() => { setSearchQuery('') }}
                />

                {title === "FAQS" ? (
                  ""
                ) : (
                  <>
                    <TableStyle.FilterButton variant="outlined" startIcon={<FilterAltIcon />} onClick={handleAnchorClick}>
                      Filter
                    </TableStyle.FilterButton>
                    <TableStyle.ExportButton variant="outlined" startIcon={svgIcon} onClick={handleAnchorClick}>
                      Export
                    </TableStyle.ExportButton>
                  </>
                )}

                {
                  state.user?.role === 'OWNER' ?
                    <TableStyle.AddButton variant="outlined" startIcon={<AddIcon />} onClick={handleClickOpen}>
                      Add
                    </TableStyle.AddButton>

                    :
                    state.user?.role === 'ADMIN' ?
                      title === "Courses" || title === "All Students" ?
                        <></>
                        :
                        <TableStyle.AddButton variant="outlined" startIcon={<AddIcon />} onClick={handleClickOpen}>
                          Add
                        </TableStyle.AddButton> :
                      <TableStyle.AddButton variant="outlined" startIcon={<AddIcon />} onClick={handleClickOpen}>
                        Add
                      </TableStyle.AddButton>

                }


              </TableStyle.SearchAndBtnsContainer>
            </TableStyle.SeachContainer>
          </Hidden>

          {/* Table Header For Small Screens */}

          <Hidden smUp>
            <TableStyle.MobileViewTableHeader searchShow={searchShow}>
              <Typography
                color={'#121F3E'}
                variant="h6"
                component="div"
                noWrap={true}
                sx={{ display: searchShow && "none" }}
              >
                {/* All Students */}
                {title}
              </Typography>
              {searchShow && (
                <TableStyle.SearchBox>
                  <GlobalSearch
                    onChangeText={(val) => { setSearchQuery(val) }}
                    placeholder="Search here..."
                    searchCancel={() => { setSearchQuery('') }}
                  />
                  <IconButton
                    size="small"
                    disableFocusRipple
                    disableRipple
                    onClick={(val) => {
                      setSearchShow(!searchShow);
                      setSearchQuery('');
                    }}
                  >
                    <TableStyle.CloseIconBox>
                      <TableStyle.CloseIcon />
                    </TableStyle.CloseIconBox>
                  </IconButton>
                  {
                    disableAddIcon &&
                    <TableStyle.AddIcon onClick={handleClickOpen} />
                  }
                </TableStyle.SearchBox>
              )}
              {!searchShow && (
                <TableStyle.HeaderIconsContainer>
                  <TableStyle.FilterListIcon onClick={handleAnchorClick} />
                  <IconButton
                    color="inherit"
                    aria-label="search"
                    disableFocusRipple
                    disableRipple
                    onClick={() => setSearchShow(!searchShow)}
                  >
                    <TableStyle.SearchIcon />
                  </IconButton>
                  {
                    !disableAddIcon &&
                    <TableStyle.AddIcon onClick={handleClickOpen} />
                  }
                </TableStyle.HeaderIconsContainer>
              )}
            </TableStyle.MobileViewTableHeader>
          </Hidden>
        </TableStyle.BoxElement>
      </Toolbar>








      {/* Table  */}
      <TableContainer >
        <TableStyle.CustomTable
          aria-labelledby="tableTitle"
          size={'large'}
          sx={{
            minWidth: 750,
            [`& .${tableCellClasses.root}`]: {
              borderBottom: "none"
            }
          }}
        >
          <TableHead>
            <TableRow>
              {tableHeadings?.map((item, i) => {
                return <TableCell align="center">{item && item}</TableCell>;
              })}
            </TableRow>
          </TableHead>



          <TableBody>
            {filterDataArray?.filter(searchingFor(searchQuery)).map((row, index) => {
              return (
                <>
                  <TableStyle.CustomTableRow key={index}>
                    {printedKeys?.map((subitem, subIndex) => {
                      const exactKey = row[subitem?.key];
                      return (
                        <TableStyle.CustomTableCell
                          align="center"
                          key={subIndex + 10}
                        >
                          {
                            subitem?.type === "modalQuestion" ? (
                              <CommonModal question={row} />
                            ) :
                              subitem?.type === "modalAnswer" ? (
                                <CommonModal answer={row} />
                              ) :
                                subitem?.type === "modalProfileUrl" ? (
                                  <CommonModal freelancingProfileUrl={row} />
                                ) :
                                  subitem?.type === "image" ? (
                                    <>
                                      {
                                        row.eventImage ?
                                          <TableStyle.Image src={exactKey} />
                                          :
                                          row.spekaerImage ?
                                            <TableStyle.Image src={exactKey} />
                                            :
                                            <p>No Image</p>
                                      }
                                    </>
                                  ) :
                                    subitem?.type === "editor" ? (
                                      <p
                                        dangerouslySetInnerHTML={{ __html: exactKey }}
                                      ></p>
                                    ) : subitem?.type === "crud" ? (
                                      <>
                                        <TableStyle.IconDiv>
                                          {
                                            state?.user?.role === "STUDENT" ?
                                              title === "My Courses" || title === "Attandance" || title === "Quiz" ?
                                                <></>
                                                :
                                                <>
                                                  {/* <Tooltip title="Delete">
                                        <CommonConfirmModal ctaDeleteHandler={ctaDeleteHandler} row={row} title={title} />
                                      </Tooltip> */}
                                                  <Tooltip title="Update">
                                                    <IconButton
                                                      aria-label="update"
                                                      size="small"
                                                      onClick={() => ctaEditButtonHandler(row)}
                                                    >
                                                      <TableStyle.EditIcon />
                                                    </IconButton>
                                                  </Tooltip>
                                                </>
                                              :
                                              state?.user?.role === "TEACHER" ?
                                                title === "Lectures" ?
                                                  <></>
                                                  :
                                                  <Tooltip title="Update">
                                                    <IconButton
                                                      aria-label="update"
                                                      size="small"
                                                      onClick={() => ctaEditButtonHandler(row)}
                                                    >
                                                      <TableStyle.EditIcon />
                                                    </IconButton>
                                                  </Tooltip>
                                                :
                                                <Tooltip title="Update">
                                                  <IconButton
                                                    aria-label="update"
                                                    size="small"
                                                    onClick={() => ctaEditButtonHandler(row)}
                                                  >
                                                    <TableStyle.EditIcon />
                                                  </IconButton>
                                                </Tooltip>
                                          }
                                        </TableStyle.IconDiv>
                                      </>
                                    ) : (
                                      exactKey

                                    )}
                        </TableStyle.CustomTableCell>
                      );
                    })}
                  </TableStyle.CustomTableRow>
                </>
              );
            })}
          </TableBody>
        </TableStyle.CustomTable>
      </TableContainer>
    </>
  );
}

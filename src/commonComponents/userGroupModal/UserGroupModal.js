import { Checkbox, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Tooltip } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { ModalTabsStyle } from "./UserGroupModalStyle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom"
import PButton from "../Pbutton/Pbutton";
import { UseUserGroup } from "../../modules/settings/userGroup/UseUserGroup";
import { data } from "../../constants/userGroupPagesList"
import CommonTableLoader from "../commonTableLoader/CommonTableLoader";
import { updateFlag, openModal, userGroupData } from "../../lib/reactivities/reactiveVarables";
import { useReactiveVar } from "@apollo/client";
export default function UserGroupModal() {
    const openFormModal = useReactiveVar(openModal)
    const modalUpdateFlag = useReactiveVar(updateFlag)
    const useUserGroupData = useReactiveVar(userGroupData)
    const [
        {
            userName,
            userGroupRole,
            ADD_LOADING,
            email,
            setEmail,
            setUserName,
            setuserGroupRole,
            ctaHandler,
            handlingPermission,
            flag,
            ctaUpdateHandler
        }
    ] = UseUserGroup();

    const [stateArray, setStateArray] = useState(data);
    const formInputs = [
        {
            label: "Name",
            name: "name",
            type: "text",
            placeholder: "Enter Name"
        },
        {
            label: "User Role",
            name: "role",
            type: "text",
            placeholder: "Enter Role"
        },
    ]

    const handleCloseUpdate = () => {
        openModal(false)
        updateFlag(false)
        // dispatch({
        //     type: "setModal",
        //     payload: {
        //         modalUpdateFlag: false,
        //         openFormModal: false,
        //     },
        // });
    };
    // const roles = [
    //   "ORGANIZATIONKEY", "ADMIN", "TEACHER", "STUDENT"
    // ]
    return (
        <Dialog open={openFormModal} onClose={handleCloseUpdate} fullWidth={true} BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(8px)' } }}>
            <DialogTitle>Update User Group</DialogTitle>
            <ModalTabsStyle.MainDiv>
                <Grid container>

                    {formInputs.map((item) => {
                        const test = useUserGroupData;
                        return (
                            <Grid item xl={12} lg={12} mg={12} sm={12} xs={12}>
                                <ModalTabsStyle.InputLabel>
                                    {item.label}
                                    <ModalTabsStyle.MyInput
                                        // User Group Name
                                        placeholder={item.placeholder}
                                        value={useUserGroupData[item.name]}
                                        onChange={(e) => {
                                            test[item.name] = e.target.value
                                            userGroupData(test)
                                            // dispatch({
                                            //     type: "setEditUserGroupData",
                                            //     payload: test
                                            // })
                                        }}
                                    />
                                </ModalTabsStyle.InputLabel>
                            </Grid>
                        )
                    })}
                </Grid>
                <ModalTabsStyle.TableDiv>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 530 }} aria-label="simple table">
                            <ModalTabsStyle.PermissionsTableHead>
                                <TableRow>
                                    <ModalTabsStyle.PermissionTableTitleHead>
                                        Option
                                    </ModalTabsStyle.PermissionTableTitleHead>
                                    <ModalTabsStyle.PermissionTableTitleHead align="right">
                                        View Only
                                    </ModalTabsStyle.PermissionTableTitleHead>
                                    <ModalTabsStyle.PermissionTableTitleHead align="right">
                                        Create
                                    </ModalTabsStyle.PermissionTableTitleHead>
                                    <ModalTabsStyle.PermissionTableTitleHead align="right">
                                        Update
                                    </ModalTabsStyle.PermissionTableTitleHead>
                                    <ModalTabsStyle.PermissionTableTitleHead align="right">
                                        Delete
                                    </ModalTabsStyle.PermissionTableTitleHead>
                                    {/* <TabsStyle.PermissionTableTitleHead align="center">
                    Full Access
                  </TabsStyle.PermissionTableTitleHead> */}
                                </TableRow>
                            </ModalTabsStyle.PermissionsTableHead>
                            {
                                ADD_LOADING ?
                                    <CommonTableLoader />
                                    :
                                    <TableBody>
                                        {stateArray?.navigationResults?.map((navModule, navModuleIndex) => {
                                            return navModule?.pages.map((navPage, navPageIndex) => {
                                                return (
                                                    <>
                                                        <TableRow
                                                            key={navModuleIndex}
                                                            sx={{
                                                                "&:last-child td, &:last-child th": { border: 0 },
                                                            }}
                                                        >
                                                            <ModalTabsStyle.PermissionTitletTxt
                                                                component="th"
                                                                scope="row"
                                                            >
                                                                {navPage.pageName}
                                                            </ModalTabsStyle.PermissionTitletTxt>
                                                            {/* {state?.editUserGroupData?.permissions.map((permission) => {
                                                                return permission.map((val) => {
                                                                    return (
                                                                        val.pageName === navPage.pageName ?
                                                                            val.ViewPermission == true ?
                                                                                (
                                                                                    <TableCell
                                                                                        style={{ paddingBottom: 10, paddingTop: 10 }}
                                                                                        align="right"
                                                                                    >
                                                                                        <Checkbox
                                                                                            onChange={() =>
                                                                                                handlingPermission(
                                                                                                    navModule,
                                                                                                    navPageIndex,
                                                                                                    "ViewPermission"
                                                                                                )

                                                                                            }
                                                                                            checked

                                                                                        />
                                                                                    </TableCell>
                                                                                ) :(
                                                                                
                                                                                    <TableCell
                                                                                        style={{ paddingBottom: 10, paddingTop: 10 }}
                                                                                        align="right"
                                                                                    >
                                                                                        <Checkbox
                                                                                            onChange={() =>
                                                                                                handlingPermission(
                                                                                                    navModule,
                                                                                                    navPageIndex,
                                                                                                    "ViewPermission"
                                                                                                )

                                                                                            }

                                                                                        />
                                                                                    </TableCell>
                                                                                        ): "" 
                                                                        
                                                                    )
                                                                })
                                                            })} */}

                                                            <TableCell
                                                                style={{ paddingBottom: 10, paddingTop: 10 }}
                                                                align="right"
                                                            >
                                                                <Checkbox
                                                                    onChange={() =>
                                                                        handlingPermission(
                                                                            navModule,
                                                                            navPageIndex,
                                                                            "ViewPermission"
                                                                        )

                                                                    }

                                                                />
                                                            </TableCell>
                                                            <TableCell
                                                                style={{ paddingBottom: 10, paddingTop: 10 }}
                                                                align="right"
                                                            >
                                                                <Checkbox
                                                                    onChange={() =>
                                                                        handlingPermission(
                                                                            navModule,
                                                                            navPageIndex,
                                                                            "CreatePermission"
                                                                        )
                                                                    }
                                                                />
                                                            </TableCell>
                                                            <TableCell
                                                                style={{ paddingBottom: 10, paddingTop: 10 }}
                                                                align="right"
                                                            >
                                                                <Checkbox
                                                                    onChange={() =>
                                                                        handlingPermission(
                                                                            navModule,
                                                                            navPageIndex,
                                                                            "EditPermission"
                                                                        )
                                                                    }
                                                                />
                                                            </TableCell>
                                                            <TableCell
                                                                style={{ paddingBottom: 10, paddingTop: 10 }}
                                                                align="right"
                                                            >
                                                                <Checkbox
                                                                    onChange={() =>
                                                                        handlingPermission(
                                                                            navModule,
                                                                            navPageIndex,
                                                                            "DelPermission"
                                                                        )
                                                                    }
                                                                />
                                                            </TableCell>
                                                            {/* <TableCell
                                                                style={{ paddingBottom: 10, paddingTop: 10 }}
                                                                align="center"
                                                            >
                                                                <Checkbox
                                                                    onChange={() =>
                                                                        handlingPermission(
                                                                            navModule,
                                                                            navPageIndex,
                                                                            "FullAccess"
                                                                        )
                                                                    }
                                                                />
                                                            </TableCell> */}
                                                        </TableRow>
                                                    </>
                                                );
                                            });
                                        })}
                                    </TableBody>
                            }
                        </Table>
                    </TableContainer>
                    <br />
                    <PButton title="Update User Group" ctaHandler={ctaUpdateHandler} />



                </ModalTabsStyle.TableDiv>
            </ModalTabsStyle.MainDiv >
        </Dialog>
    )

}

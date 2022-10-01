import React from 'react'
import NewTable from '../../../commonComponents/newTable/NewTable';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
import {
  ToastContainer
} from "react-toastify";
import { UseUserGroup } from './UseUserGroup';
import { TabsStyle } from './UserGroupStyle';
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom"
import PButton from "../../../commonComponents/Pbutton/Pbutton";
import TableContainer from "@mui/material/TableContainer";
import { TableBody, TableCell } from '@mui/material';
import CommonModal from '../../../commonComponents/commonModal/CommonModal';

export default function ViewAllUserGroup() {
  const [{ refacteredData, GET_LOADING, ctaEditButtonHandler }] = UseUserGroup()

  return (
    <>
      <ToastContainer />

      {/* <Table */}
      <TabsStyle.TableDiv>
      <Link to="/user-groups"><PButton  title="Add User Group"  /></Link>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 530 }} aria-label="simple table">
            <TabsStyle.PermissionsTableHead>
              <TableRow>
                <TabsStyle.PermissionTableTitleHead>
                  Name
                </TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead >
                  Role
                </TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead >
                  Permissions
                </TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead >
                  Created At
                </TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead >
                  Updated At
                </TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead >
                  Actions
                </TabsStyle.PermissionTableTitleHead>
              </TableRow>
            </TabsStyle.PermissionsTableHead>
            {
              GET_LOADING ?
                <CommonTableLoader />
                :
                <TableBody>
                  {refacteredData.map((item, index) => {

                    return (
                      <>
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TabsStyle.PermissionTitletTxt
                            component="th"
                            scope="row"
                          >
                            {item.name}
                          </TabsStyle.PermissionTitletTxt>
                          <TableCell>
                            {item.role}
                          </TableCell>
                          <TableCell>
                            <CommonModal permissions={item.permissions} />
                          </TableCell>
                          <TableCell>
                            {item.createdAt}
                          </TableCell>
                          <TableCell>
                            {item.updateAt}
                          </TableCell>
                          <TableCell>
                            <TabsStyle.IconDiv>
                              <Tooltip title="Update">
                                <IconButton
                                  aria-label="update"
                                  size="small"
                                  onClick={() => ctaEditButtonHandler(item.name, item.role, item.permissions)}

                                >
                                  <TabsStyle.EditIcon />
                                </IconButton>
                              </Tooltip>
                            </TabsStyle.IconDiv>
                          </TableCell>
                        </TableRow>
                      </>
                    )
                  })}
                </TableBody>
            }

          </Table>
        </TableContainer>
      </TabsStyle.TableDiv>
    </>
  )
}

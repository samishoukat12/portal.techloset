//Import from Libraries

import React from "react";
import {
  ToastContainer
} from "react-toastify";
//Import from Files
import CommonTableLoader from "../../../commonComponents/commonTableLoader/CommonTableLoader";
import NewTable from "../../../commonComponents/newTable/NewTable";
import Table from "../../../commonComponents/table/Table";
import {
  UseTabsPermissions
} from "./UseUserGroupTable";
export default function UserGroupTable() {
  const [
    {
      // ADD_LOADING,
      GET_LOADING,
      // DELETE_LOADING,
      // UPDATE_LOADING,
      refacteredData,
      exportTableData,
      // ctaFormHandler,
      // ctaDeleteHandler,
      // ctaUpdateHandler,
      formInputs,
      // ctaEditButtonHandler
    },
  ] = UseTabsPermissions();
  if (
    GET_LOADING 
    // DELETE_LOADING ||
    // UPDATE_LOADING ||
    // ADD_LOADING
  ) {
    return <CommonTableLoader />;
  }
  return (
    <>
      <ToastContainer />

      {/* <Table */}
      <NewTable
        title={"All User Groups"}
        tableHeadings={[

          {
            id: "name",
            Label: "name"
          },
          {
            id: "role",
            Label: "role"
          },
          {
            id: "permissions",
            Label: "permissions"
          },
          {
            id: "createdAt",
            Label: "Created At"
          },
          {
            id: "updateAt",
            Label: "updateAt"
          },
          {
            id: "actions",
            Label: "Actions",
          }
        ]}
        // ctaEditButtonHandler={ctaEditButtonHandler}
        printedKeys={[

          {
            key: "name",
          },
          {
            key: "role",
          },
          {
            key: "permissions",
            type: "modalPermissions"
          },
          {
            key: "createdAt",
          },
          {
            key: "updateAt",
          },
          {
            type: "crud",
          },
        ]}
        formInputs={formInputs}
        filterdata={{
          key: "role",
          filterTag: [
            'All',
            'ADMIN',
            'TEACHER'
          ],
        }}
        data={refacteredData}
        exportTable={exportTableData}
      // ctaFormHandler={ctaFormHandler}
      // ctaDeleteHandler={ctaDeleteHandler}
      // ctaUpdateHandler={ctaUpdateHandler}
      />
    </>
  );
}

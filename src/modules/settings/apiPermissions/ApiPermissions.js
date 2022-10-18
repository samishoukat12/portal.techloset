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
  UseApiPermissions
} from "./UseApiPermissions";
export default function ApiPermissions() {
  const [
    {
      // ADD_LOADING,
      // GET_LOADING,
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
  ] = UseApiPermissions();
  // if (
  //   GET_LOADING ||
  //   // DELETE_LOADING ||
  //   UPDATE_LOADING ||
  //   ADD_LOADING
  // ) {
  //   return <CommonTableLoader />;
  // }
  return (
    <>
      <ToastContainer />

      {/* <Table */}
      <NewTable
        title={"Api Permissions"}
        tableHeadings={[
          {
            id: "title",
            Label: "Title"
          },
          {
            id: "route",
            Label: "Route"
          },
          {
            id: "createdAt",
            Label: "Created At"
          },
          {
            id: "updatedAt",
            Label: "updatedAt"
          },
          {
            id: "action",
            Label: "Action",
            marginLeft: 21
            
          }, 
        ]}
        // ctaEditButtonHandler={ctaEditButtonHandler}
        printedKeys={[
          {
            key: "title",
          },
          {
            key: "route",
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

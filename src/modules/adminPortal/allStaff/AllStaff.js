//Import from Libraries

import React from "react";
import { ToastContainer } from "react-toastify";
//Import from Files
import CommonTableLoader from "../../../commonComponents/commonTableLoader/CommonTableLoader";
import NewTable from "../../../commonComponents/newTable/NewTable";
import Table from "../../../commonComponents/table/Table";
import { UseAllStaff } from "./UseAllStaff";
export default function AllStaff() {
  const [
    {
      ADD_LOADING,
      GET_LOADING,
      // DELETE_LOADING,
      UPDATE_LOADING,
      refacteredData,
      ctaFormHandler,
      // ctaDeleteHandler,
      ctaUpdateHandler,
      formInputs,
      // ctaEditButtonHandler
    },
  ] = UseAllStaff();
  if (
    GET_LOADING ||
    // DELETE_LOADING ||
    UPDATE_LOADING ||
    ADD_LOADING
  ) {
    return <CommonTableLoader />;
  }
  return (
    <>
      <ToastContainer />

      {/* <Table */}
      <NewTable
        title={"All Staff"}
        tableHeadings={[
          {
            id: "name",
            Label: "Name",
          },
          {
            id: "email",
            Label: "Email",
          },
          {
            id: "cnic",
            Label: "CNIC",
          },
          {
            id: "contact",
            Label: "Contact",
          },
          {
            id: "address",
            Label: "Address",
          },
          {
            id: "role",
            Label: "Role",
          },
          {
            id: "action",
            Label: "Action",
            marginLeft: 5,
          },
        ]}
        // ctaEditButtonHandler={ctaEditButtonHandler}
        printedKeys={[
          {
            key: "name",
          },
          {
            key: "email",
          },
          {
            key: "cnic",
          },
          {
            key: "contact",
          },
          {
            key: "address",
          },
          {
            key: "role",
          },
          {
            type: "crud",
          },
        ]}
        formInputs={formInputs}
        filterdata={{
          key: "role",
          filterTag: ["All", "ADMIN", "TEACHER"],
        }}
        data={refacteredData}
        ctaFormHandler={ctaFormHandler}
        // ctaDeleteHandler={ctaDeleteHandler}
        ctaUpdateHandler={ctaUpdateHandler}
      />
    </>
  );
}

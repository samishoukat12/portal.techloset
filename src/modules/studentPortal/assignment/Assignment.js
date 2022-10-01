import React from "react";
import Table from "../../../commonComponents/table/Table";
import UseAssignment from "./UseAssignment";
import CommonTableLoader from "../../../commonComponents/commonTableLoader/CommonTableLoader";
import NewTable from "../../../commonComponents/newTable/NewTable";
import CommonCard from "../../../commonComponents/commonCard/CommonCard";
export default function Assignment() {
  
  const [
    {
      loader,
      ADD_LOADING,
      GET_LOADING,
      // DELETE_LOADING,
      UPDATE_LOADING,
      refacteredData,
      ctaFormHandler,
      // ctaDeleteHandler,
      ctaUpdateHandler,
      formInputs,
    },
  ] = UseAssignment();
  if (
    GET_LOADING ||
    // DELETE_LOADING ||
    UPDATE_LOADING ||
    ADD_LOADING ||
    loader
  ) {
    return <CommonTableLoader />;
  }
  return (
    <CommonCard
      title={'Assignments'}
      formInputs={formInputs}
      data={refacteredData}
      ctaFormHandler={ctaFormHandler}
      ctaUpdateHandler={ctaUpdateHandler}
    />
    // <NewTable
    //   title={'Assignments'}
    //   tableHeadings={[
    //     {
    //         id: "name",
    //         Label: "Name"
    //     },
    //     {
    //         id: "courseBatch",
    //         Label: "Course Batch"
    //     },
    //     {
    //         id: "courseBatchId",
    //         Label: "Course Batch Id"
    //     },
    //     {
    //         id: "createdAt",
    //         Label: "Created At"
    //     },
    //     {
    //         id: "updateAt",
    //         Label: "Update At"
    //     },
    //     {
    //       id: "action",
    //       Label: "Action",
    //       marginLeft: 3
    //   },
    //   ]}

    //   ctaFormHandler={ctaFormHandler}
    //   // ctaDeleteHandler={ctaDeleteHandler}
    //   ctaUpdateHandler={ctaUpdateHandler}
    //   printedKeys={[
    //     {
    //       key: "name",
    //     },
    //     {
    //       key: "coursesId",
    //     },
    //     {
    //       key: 'courseBatchesId',
    //     },
    //     {
    //       key: 'createdAt'
    //     },
    //     {
    //       key: 'updateAt'
    //     },
    //     {
    //       type: 'crud'
    //     }
    //   ]}
    //   formInputs={formInputs}
    //   filterdata={{
    //     key: "feeStatus",
    //     filterTag: ['All', 'Pending', 'Paid'],
    //   }}
    //   data={refacteredData}
    //   disableAddIcon={true}
    // />
  );
}

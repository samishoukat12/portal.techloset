import React from 'react';
import Table from '../../../commonComponents/table/Table';
import UseMyCourses from './UseMyCourses';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
import NewTable from '../../../commonComponents/newTable/NewTable';
export default function MyCourse() {
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
  ] = UseMyCourses();
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
    <NewTable
      title={'My Courses'}
      tableHeadings={[
        {
            id: "courseId",
            Label: "Course Id"
        },
        {
            id: "studentId",
            Label: "Student Id",
            // marginLeft: 5
        },
        {
            id: "courseApproval",
            Label: "Course Approval"
        },
        // {
        //   id: 'whyReject',
        //   Label: 'Why Reject' 
        // },
        {
          id: 'whyReject',
          Label: 'Why Reject' 
        },
        {
          id: 'feeStatus',
          Label: 'Fee status' 
        },
        {
          id: "createdAt",
          Label: "Created At"
        },
        {
            id: "updateAt",
            Label: "Update At"
        },
        {
            id: "action",
            Label: "Action",
            
        },
      ]}
      ctaFormHandler={ctaFormHandler}
      // ctaDeleteHandler={ctaDeleteHandler}
      ctaUpdateHandler={ctaUpdateHandler}
      printedKeys={[
        {
          key: "coursesId",
        },
        {
          key: "studentId",
        },
        // {
        //   key: "courseBatchesId",
        // },
        {
          key: "courseApproval",
        },

        {
          key: "whyReject",
        },
        // {
        //   key: 'courseBatches',
        // },
        // {
        //   key: "courseApproval",
        // },
        // {
        //   key: "courses",
        // },
        // {
        //   key: 'student'
        // },
        {
          key: "feeStatus",
        },
        {
          key: 'createdAt'
        },
        {
          key: 'updateAt'
        },

        // {
        //   key: "action"
        // },
        {
          type: 'crud'
        }
      ]}
      
      formInputs={formInputs}
      filterdata={{
        key: "feeStatus",
        filterTag: ['All', 'PENDING', 'PAID', 'HALFPAID'],
      }}
      data={refacteredData}
      disableAddIcon={true}
    />

  )
}

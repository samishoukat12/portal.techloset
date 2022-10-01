import React from 'react';
import { ToastContainer } from 'react-toastify';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
import NewTable from '../../../commonComponents/newTable/NewTable';
import Table from '../../../commonComponents/table/Table';
import { UseEnrollmentApproval } from './UseEnrollmentApproval';
function EnrollmentApproval() {
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
  ] = UseEnrollmentApproval();
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
    <div>
      <>

        <NewTable
          title={'Enrollment Approval'}
          tableHeadings={[
          {
              id: "userId",
              Label: "User Id"
          },
          {
              id: "courseId",
              Label: "Course Id"
          },
          {
              id: "paymentMethod",
              Label: "Payment Method"
          },
          {
              id: "amount",
              Label: "Amount"
          },
          {
              id: "transactionId",
              Label: "Transaction Id"
          },
          {
            id: "status",
            Label: 'Status'
          },
          {
              id: "action",
              Label: "Action",
              marginLeft: 4
          },
          ]}
          printedKeys={[
            {
              key: "userId",
            },
            {
              key: "coursesId",
            },
            {
              key: 'amount'
            },
            {
              key: "paymentMethod",
            },
            {
              key: "transactionId",
            },
            {
              key: "status",
            },
            {
              type: "crud",
            },
          ]}
          formInputs={formInputs}
          filterdata={{
            key: "role",
            filterTag: ['All', 'PENDING', 'APPROVED', 'REJECT'],
          }}
          data={refacteredData}
          ctaFormHandler={ctaFormHandler}
          // ctaDeleteHandler={ctaDeleteHandler}
          ctaUpdateHandler={ctaUpdateHandler}
        />

      </>
    </div>
  );
}

export default EnrollmentApproval;

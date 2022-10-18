import React from 'react';
import Table from '../../commonComponents/table/Table';
import { UseSuccessStory } from './useSuccessStory';
import CommonTableLoader from '../../commonComponents/commonTableLoader/CommonTableLoader';
import NewTable from '../../commonComponents/newTable/NewTable';
export default function SuccessStory() {
  const [
    {
      loader,
      ADD_LOADING,
      GET_LOADING,
      // DELETE_LOADING,
      UPDATE_LOADING,
      refacteredData,
      exportTableData,
      ctaFormHandler,
      // ctaDeleteHandler,
      ctaUpdateHandler,
      formInputs,
    },
  ] = UseSuccessStory();
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
    <>

      <div>
        <NewTable
          title={'Success Stories'}
          tableHeadings={[
            {
              id: 'freelancingProfileUrl',
              Label: 'Freelancing Profile Url'
            },
            {
              id: 'city',
              Label: 'City'
            },
            {
              id: 'paymentProof',
              Label: 'Payment Proof'
            },
            {
              id: 'description',
              Label: 'Description'
            },
            {
              id: 'totalEarnedAmount',
              Label: 'Total Earned Amount'
            },
            {
              id: 'whyReject',
              Label: 'Why Reject'
            },
            {
              id: "status",
              Label: 'Status'
            },
            {
                id: "action",
                Label: "Action",
                marginLeft:5
            },
          ]}
          printedKeys={[
            {
              key: "freelancingProfileUrl",
              // type:"modalProfileUrl"
              type:"modalProfileUrl"
            },
            {
              key: "city",
            },
            {
              key: "paymentProof",
            },
            {
              key: "description",
              type:"modalDescription"
            },
            {
              key: "totalEarnedAmount",
            },
            {
              key: "whyReject",
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
            filterTag: ['All', 'PUBLISH', 'UNPUBLISH'],
          }}
          data={refacteredData}
          exportTable={exportTableData}
          ctaFormHandler={ctaFormHandler}
          // ctaDeleteHandler={ctaDeleteHandler}
          ctaUpdateHandler={ctaUpdateHandler}

        />
      </div>

    </>
  );
}

import React from 'react';
import Table from '../../../commonComponents/table/Table';
import UseAttandance from './UseAttandance';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
import NewTable from '../../../commonComponents/newTable/NewTable';
export default function Attandance() {
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
  ] = UseAttandance();
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
      title={'Attandance'}
      tableHeadings={[
        {
          id: "attendence",
          Label: "Attendence"
        },
        {
          id: "date",
          Label: "Date"
        },
        {
          id: "userId",
          Label: "User Id"
        },
        {
          id: "action",
          Label: "Action",
          marginLeft: 10
        },
      ]}
      // ctaDeleteHandler={ctaDeleteHandler}
      ctaFormHandler={ctaFormHandler}
      ctaUpdateHandler={ctaUpdateHandler}
      printedKeys={[
        {
          key: "attendence",
        },
        {
          key: 'date',
        },
        {
          key: 'userId'
        },
        // {
        //   key: "attendence",
        // },
        {
          type: "crud",
        },
      ]}
      formInputs={formInputs}
      filterdata={{
        key: "attandance",
        filterTag: [
          'All',
          'PRESENT',
          'ABSENT'],
      }}
      data={refacteredData}
      disableAddIcon={true}
    />

  )
}

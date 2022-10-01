import React from 'react';
import Table from '../../../commonComponents/table/Table';
import UseStudentList from './UseStudentList';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
import NewTable from '../../../commonComponents/newTable/NewTable';
export default function StudentList() {
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
  ] = UseStudentList();
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
      title={'Students List'}
      tableHeadings={[
        {
          id: 'name',
          Label: 'Name'
        },
        {
          id: 'email',
          Label: 'Email'
        },
        {
          id: 'status',
          Label: 'Status'
        },
      ]}
      printedKeys={[
        {
          key: "name",
        },
        {
          key: 'email',
        },
        {
          key: 'status'
        },
      ]}
      formInputs={formInputs}
      filterdata={{
        key: "status",
        filterTag: ['All', 'Offline', 'Active'],
      }}
      data={refacteredData}
      disableAddIcon={true}
    />

  )
}

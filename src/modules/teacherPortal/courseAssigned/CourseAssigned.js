import React from 'react';
import Table from '../../../commonComponents/table/Table';
import UseCourseAssigned from './UseCourseAssigned';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
import NewTable from '../../../commonComponents/newTable/NewTable';
export default function CourseAssigned() {
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
  ] = UseCourseAssigned();
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
      title={'Course Assigned'}
      tableHeadings={[
        {
          id: 'name',
          Label: 'Name'
        },
        {
          id: 'courseBatches',
          Label: 'Course Batches'
        },
        {
          id: 'courseBatchesId',
          Label: 'Course Batches Id'
        },
        {
          id: 'courses',
          Label: 'Courses'
        },
        {
          id: 'courseId',
          Label: 'Course Id'
        },
      ]}
      ctaFormHandler={ctaFormHandler}
      // ctaDeleteHandler
      ctaUpdateHandler={ctaUpdateHandler}
      printedKeys={[
        {
          key: "name",
        },
        {
          key: 'courseBatches',
        },
        {
          key: 'courseBatchesId'
        },
        {
          key: 'courses'
        },
        {
          key: 'courseId'
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

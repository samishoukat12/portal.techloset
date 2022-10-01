import React from 'react';
import Table from '../../../commonComponents/table/Table';
import UseCourseBatch from './UseCourseBatch';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
import NewTable from '../../../commonComponents/newTable/NewTable';
export default function CourseBatch() {
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
        },
    ] = UseCourseBatch();
    if (
        GET_LOADING ||
        // DELETE_LOADING ||
        UPDATE_LOADING ||
        ADD_LOADING
    ) {
        return <CommonTableLoader />;
    }
    return (
        <NewTable
            title={'Course Batch'}
            tableHeadings={[
                {
                    id: "name",
                    Label: "Name"
                },
                {
                    id: "courseId",
                    Label: "Course Id"
                },
                {
                    id: "courseName",
                    Label: "Course Name"
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
                    marginLeft:5
                },
            ]}
            
            ctaFormHandler={ctaFormHandler}
            // ctaDeleteHandler={ctaDeleteHandler}
            ctaUpdateHandler={ctaUpdateHandler}
            printedKeys={[
                {
                    key: "name",
                },
                {
                    key: 'coursesId',
                },
                {
                    key: 'courseName'
                },
                {
                    key: 'createdAt'
                },
                {
                    key: 'updateAt'
                },
                {
                    type: 'crud'
                },
            ]}
            formInputs={formInputs}
            filterdata={{
                key: "status",
                filterTag: [
                    'All',
                    'Offline',
                    'Active'
                ],
            }}
            data={refacteredData}
            disableAddIcon={true}
        />

    )
}

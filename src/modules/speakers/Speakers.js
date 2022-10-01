import React from 'react';
import Table from '../../commonComponents/table/Table';
import UseSpeakers from './UseSpeakers';
import CommonTableLoader from '../../commonComponents/commonTableLoader/CommonTableLoader';
import NewTable from '../../commonComponents/newTable/NewTable';
export default function Speakers() {
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
    ] = UseSpeakers();
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
            title={'Speakers'}
            tableHeadings={[
                // {
                //     id: "Id",
                //     Label: "Id"
                // },
                {
                    id: "speakerName",
                    Label: "speakerName"
                },
                {
                    id: "spkearDesc",
                    Label: "speakerDesc"
                },
                {
                    id: "speakerImage",
                    Label: "speakerImage"
                },
                {
                    id: "createdAt",
                    Label: "createdAt"
                },
                {
                    id: "updateAt",
                    Label: "updateAt"
                },
                {
                    id: "action",
                    Label: "Action",
                    marginLeft: 6
                }
            ]}

            ctaFormHandler={ctaFormHandler}
            // ctaDeleteHandler={ctaDeleteHandler}
            ctaUpdateHandler={ctaUpdateHandler}
            printedKeys={[
                // {
                //     key: "id",
                // },
                {
                    key: "speakerName",
                },
                {
                    key: 'spkearDesc',
                },
                {
                    key: 'spekaerImage',
                    type: 'image'
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
                filterTag: ['All', 'Offline', 'Active'],
            }}
            data={refacteredData}
            disableAddIcon={true}
        />

    )
}

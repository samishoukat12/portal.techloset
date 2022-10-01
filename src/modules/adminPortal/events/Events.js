import React from 'react';
import { ToastContainer } from 'react-toastify';
import Table from '../../../commonComponents/table/Table';
import NewTable from '../../../commonComponents/newTable/NewTable';

import { UseEvents } from './UseEvents';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
export default function Events() {
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
            onDateChange,
            formInputs,
            handleChange,
            date
        },
    ] = UseEvents();
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

            <NewTable
                title={'Events'}
                tableHeadings={[
                    {
                        id: "name",
                        Label: "Name"
                    },
                    {
                        id: "description",
                        Label: "Description"
                    },
                    {
                        id: "date",
                        Label: "Date"
                    },
                    {
                        id: "peakerId",
                        Label: "Speaker Id"
                    },
                    {
                        id: "image",
                        Label: "Image"
                    },
                    {
                      id: "status",
                      Label: 'Status'
                    },
                    {
                        id: "action",
                        Label: "Action",
                        marginLeft:4.5
                    },
                ]}
                date={date}
                onDateChange={onDateChange}
                printedKeys={[
                    {
                        key: "eventName",
                    },
                    {
                        key: "eventDesc",
                    },

                    {
                        key: "eventDate",
                    },

                    {
                        key: "speakerId",
                    },
                    {
                        key: "eventImage",
                        type:"image"
                    },
                    {
                        key: "eventStatus",
                    },
                    {
                        type: "crud",
                    }
                ]}
                formInputs={formInputs}
                filterdata={{
                    key: "role",
                    filterTag: ['All', 'PAST', 'UPCOMING'],
                }}
                data={refacteredData}
                ctaFormHandler={ctaFormHandler}
                handleChange={handleChange}
                // ctaDeleteHandler={ctaDeleteHandler}
                ctaUpdateHandler={ctaUpdateHandler}
            />

        </div>
    );
}

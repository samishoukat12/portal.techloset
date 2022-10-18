import React from 'react';
import Table from '../../../commonComponents/table/Table';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
import {
    UseContactUs
} from './UseContactUs';
import NewTable from '../../../commonComponents/newTable/NewTable';
export default function ContactUs() {
    const [
        {
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
    ] = UseContactUs();
    if (
        GET_LOADING ||
        // DELETE_LOADING ||
        UPDATE_LOADING ||
        ADD_LOADING
    ) {
        return <CommonTableLoader />;
    }
    return (
        <div>
            <>

                <NewTable
                    title='Contact us'
                    tableHeadings={[
                        {
                          id: "name",
                          Label: "Name"
                        },
                        {
                          id: "subject",
                          Label: "Subject"
                        },
                        {
                          id: "message",
                          Label: "Message"
                        },
                        {
                          id: "reply",
                          Label: "Reply"
                        },
                        {
                          id: "status",
                          Label: "Status"
                        },
                        {
                          id: "action",
                          Label: "Action",
                          marginLeft: 12.5
                        }
                      ]}
                    printedKeys={[
                        {
                            key: "name",
                        },
                        {
                            key: "subject",
                        },
                        {
                            key: "message",
                        },
                        {
                            key: "reply",
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
                        filterTag: [
                            "All",
                            "CONTACTED",
                            "DECLINE",
                            "UNSEEN",
                            "USEFUL"
                        ],
                    }}
                    data={refacteredData}
                    exportTable={exportTableData}
                    ctaFormHandler={ctaFormHandler}
                    // ctaDeleteHandler={ctaDeleteHandler}
                    ctaUpdateHandler={ctaUpdateHandler}
                />

            </>
        </div>
    );
}

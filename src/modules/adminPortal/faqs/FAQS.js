import React from 'react';
import Table from '../../../commonComponents/table/Table';
import NewTable from '../../../commonComponents/newTable/NewTable';
import { UseFaqs } from './UseFAQS';
import { ToastContainer } from 'react-toastify';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
export default function FAQS() {
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
    ] = UseFaqs();
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

            <NewTable
                title='FAQS'
                tableHeadings={[
                    {
                        id: "faqQuestion",
                        Label: "Faq Question"
                    },
                    {
                        id: "faqAnswer",
                        Label: "Faq Answer"
                    },
                    {
                        id: "courseId",
                        Label: "Course Id"
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
                        marginLeft: 7
                    },
                    
                ]}
                printedKeys={[
                    {
                        key: "faqQuestion",
                        type:"modalQuestion"
                    },
                    {
                        key: "faqAnswer",
                        type:"modalAnswer"
                    },
                    {
                        key: "courseId",
                    },
                    {
                        key: "createdAt",
                    },
                    {
                        key: "updateAt",
                    },

                    {
                        type: "crud",
                    },
                    // {
                    //   key: "postUrl",
                    //   type: "image",
                    // },
                    // {
                    //   key: "postDesc",
                    //   type: "editor",
                    // },
                ]}
                formInputs={formInputs}
                filterdata={{
                    key: "role",
                    filterTag: ['All', 'ADMIN', 'TEACHER'],
                }}
                data={refacteredData}
                ctaFormHandler={ctaFormHandler}
                // ctaDeleteHandler={ctaDeleteHandler}
                ctaUpdateHandler={ctaUpdateHandler}
            />

        </>
    );
}

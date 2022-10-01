import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import { useState, useContext } from "react";
import {
    ToastError,
    ToastSuccess,
    ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import {
    ADD_CONTACT_US,

    // DELETE_CONTACT,
    UPDATE_SINGLE_CONTACT,
} from "../../../lib/mutation/AllMutations";
import { GET_CONTACT_US } from "../../../lib/queries/AllQueries";
import { openModal, updateFlag, editData, editId } from "../../../lib/reactivities/reactiveVarables";







export function UseContactUs() {
    const useEditId = useReactiveVar(editId)
    const useEditData = useReactiveVar(editData)
    console.log("Edit data in contact", useEditData);
    const formInputs = [
        {
            label: "Name",
            name: "name",
            type: "text",
        },
        {
            label: "Subject",
            name: "subject",
            type: "text",
        },
        {
            label: "Message",
            name: "message",
            type: "text",
        },
        {
            label: "Reply",
            name: "reply",
            type: "text",
        },
        {
            label: "Status",
            name: "status",
            type: "select",
            dropDownContent: [
                "CONTACTED",
                "DECLINE",
                "UNSEEN",
                "USEFUL"
            ],
        },
    ]






    //GET STAFF 

    let {
        data,
        loading: GET_LOADING,
    } = useQuery(GET_CONTACT_US);
    const refacteredData = [];
    data?.contactuses?.map((item) => {
        refacteredData.push({
            id: item.id,
            name: item.name,
            subject: item.subject,
            message: item.message,
            status: item.status,
            reply: item.reply,

        });
    });


    //ADD STAFF
    const AddContactInCache = (cache, { data }) => {
        const newContact = data.createContactUs
        const contacts = cache.readQuery({
            query: GET_CONTACT_US,
        })

        cache.writeQuery({
            query: GET_CONTACT_US,
            data: {
                contactuses: [
                    ...contacts.contactuses,
                    newContact
                ]
            }
        })
    };

    let [
        CreateContactUs,
        {
            loading: ADD_LOADING
        }] = useMutation(ADD_CONTACT_US, {
            update: AddContactInCache
        });
    const ctaFormHandler = async (event) => {
        event.preventDefault();
        if (!useEditData?.name) {
            ToastWarning('Name required')
        }
        else if (!useEditData?.subject) {
            ToastWarning('Subject  required')
        }
        else if (!useEditData?.message) {
            ToastWarning('Message required')
        }
        else if (!useEditData?.reply) {
            ToastWarning('Reply required')
        }
        else if (!useEditData?.status) {
            ToastWarning('Status required')
        }
        else {
            try {
                await CreateContactUs({
                    variables: {
                        data: {
                            name: useEditData?.name,
                            subject: useEditData?.subject,
                            message: useEditData?.message,
                            status: useEditData?.status,
                            reply: useEditData?.reply,
                        },
                    },

                    onCompleted(data, cache) {
                        openModal(false)
                        updateFlag(false)
                        editData({})
                        ToastSuccess('Contact Added')

                    },

                });
            } catch (error) {
                openModal(false)
                ToastError("Contact not added");

            }
        }
    };





    // DELETE STAFF

    // let [
    //     DeleteMutation,
    //     {
    //         loading: DELETE_LOADING
    //     }] = useMutation(DELETE_CONTACT);
    // const ctaDeleteHandler = async ({ ...data }) => {
    //     try {
    //         await DeleteMutation({
    //             variables: {
    //                 where: {
    //                     id: data.id,
    //                 },
    //             },
    //             onCompleted(data) {
    //                 ToastSuccess('Contact Deleted')
    //             },
    //             refetchQueries: [{ query: GET_CONTACT_US }],
    //         });
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };





    //Update Contacts
    let [
        UpdateContactUs,
        {
            loading: UPDATE_LOADING
        }] = useMutation(UPDATE_SINGLE_CONTACT);

    const ctaUpdateHandler = async (event) => {
        event.preventDefault();
        if (!useEditData?.name) {
            ToastWarning('Name required')
        }
        else if (!useEditData?.subject) {
            ToastWarning('Subject  required')
        }
        else if (!useEditData?.message) {
            ToastWarning('Message required')
        }
        else if (!useEditData?.reply) {
            ToastWarning('Reply required')
        }
        else if (!useEditData?.status) {
            ToastWarning('Status required')
        }
        else {
            try {
                await UpdateContactUs({
                    variables: {
                        where: {
                            id: useEditId
                        },
                        data: {
                            name: {
                                set: useEditData?.name
                            },
                            subject: {
                                set: useEditData?.subject
                            },
                            message: {
                                set: useEditData?.message
                            },
                            reply: {
                                set: useEditData?.reply
                            },
                            status: {
                                set: useEditData?.status
                            }
                        }
                    },

                    onCompleted() {
                        openModal(false)
                        updateFlag(false)
                        editData({})
                        ToastSuccess('Contact Updated')

                    },

                })

            } catch (error) {
                console.log(error.message);
            }
        }
    }
    return [
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
    ];
}

import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import { useState, useContext, useReducer } from "react";
import {
    ToastError,
    ToastSuccess,
    ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import {
    ADD_USER,
    // DELETE_USER,
    UPDATE_USER,
} from "../../../lib/mutation/AllMutations";
import {
    GET_USERS
} from "../../../lib/queries/AllQueries";

import { openModal, updateFlag, editData, editId } from "../../../lib/reactivities/reactiveVarables";







export function UseApiPermissions() {
    const useEditData = useReactiveVar(editData)
    const useEditId = useReactiveVar(editId)
    const formInputs = [
        {
            label: "Name",
            name: "name",
            type: "text",
        },
        {
            label: "Email",
            name: "email",
            type: "email",
        },

        {
            label: "Password",
            name: "password",
            type: "password",
        },
        {
            label: "Cnic",
            name: "cnic",
            type: "text",
        },
        {
            label: "Contact",
            name: "contact",
            type: "tel",
        },
        {
            label: "Address",
            name: "address",
            type: "text",
        },
        {
            label: "User Group",
            name: "role",
            type: "select",
            dropDownContent: [
                "ADMIN",
                "TEACHER"
            ],
        },
    ]


    //GET STAFF 

    let {
        data,
        loading: GET_LOADING,
    } = useQuery(GET_USERS);
    const refacteredData = [
        {
            id: 1,
            title: 'Stest',
            route: "Stest@gmail.com",
            createdAt: new Date(),
            UpdatedAt: new Date(),
        },
        {
            id: 2,
            title: 'Stest',
            route: "Stest@gmail.com",
            createdAt: new Date(),
            UpdatedAt: new Date(),
        },
        {
            id: 3,
            title: 'Stest',
            route: "Stest@gmail.com",
            createdAt: new Date(),
            UpdatedAt: new Date(),
        },
    ];

    // data?.users?.map((item) => {
    //     if (item.role === "ADMIN") {
    //         refacteredData.push({
    //             id: item.id,
    //             name: item.name,
    //             email: item.email,
    //             contact: item.contact,
    //             address: item.address,
    //             cnic: item.cnic,
    //             role: item.role,
    //         })
    //     }
    //     else if (item.role === "TEACHER") {
    //         refacteredData.push({
    //             id: item.id,
    //             name: item.name,
    //             email: item.email,
    //             contact: item.contact,
    //             address: item.address,
    //             cnic: item.cnic,
    //             role: item.role,
    //         })
    //     }
    // });


    const exportTableData = {
    data: refacteredData,
    sheetname: "Api Permissions",
    filename: "Api-Permissions-table-Data"
    }


    //ADD STAFF

    let [
        CreateUser,
        {
            loading: ADD_LOADING
        }] = useMutation(ADD_USER);


    const ctaFormHandler = async (event) => {
        event.preventDefault();
        if (!useEditData?.name) {
            ToastWarning('Name required')
        }
        else if (!useEditData?.email) {
            ToastWarning('Email required')
        }
        else if (!useEditData?.contact) {
            ToastWarning('Contact required')
        }
        else if (!useEditData?.cnic) {
            ToastWarning('cnic required')
        }
        else if (!useEditData?.address) {
            ToastWarning('address required')
        }
        else if (!useEditData?.role) {
            ToastWarning('Role required')
        }
        else if (useEditData?.contact.length > 10) {
            ToastWarning('Phone No Must be 10 digits')
        }


        else {
            try {
                await CreateUser({
                    variables: {

                        data: {
                            name: useEditData?.name,
                            email: useEditData?.email,
                            password: useEditData?.password,
                            cnic: useEditData?.cnic,
                            contact: useEditData?.contact,
                            address: useEditData?.address,
                            role: useEditData?.role,
                        }

                    },


                    onCompleted() {
                        // dispatch({
                        //     type: "setModal",
                        //     payload: {
                        //         modalUpdateFlag: false,
                        //         openFormModal: false,
                        //     },
                        // });
                        openModal(false)
                        updateFlag(false)


                        ToastSuccess('Staff Added')
                    },
                    refetchQueries: [{ query: GET_USERS }],
                    // update(cache, { data: { addItems } }) {
                    //   const { tados } = cache.readQuery({
                    //     query: GET_STAFF
                    //   })
                    //   cache.writeQuery({
                    //     query: GET_STAFF,
                    //     data: {
                    //       tados: [
                    //         data.CreateManyStaff,
                    //         ...tados

                    //       ]
                    //     }
                    //   })
                    // }

                    // update: (cache, { data: { addItem } }) => {
                    //   const data = cache.readQuery({ query: GET_STAFF });
                    //   console.log('sami',data);
                    //   data.items = [...data.items, addItem];
                    //   cache.writeQuery({ query: GET_STAFF }, data);
                    // },

                });
                // const queryResult = cache.readQuery({
                //   query: GET_STAFF
                // });
                // console.log('sami', queryResult);
            } catch (error) {
                // dispatch({
                //     type: "setModal",
                //     payload: {
                //         openFormModal: false,
                //     },
                // });
                openModal(false)
                ToastError(error.message);

            }
        }

    };





    // DELETE STAFF

    // let [
    //   DeleteUser,
    //   {
    //     loading: DELETE_LOADING
    //   }] = useMutation(DELETE_USER);
    // const ctaDeleteHandler = async ({ ...data }) => {
    //   try {
    //     await DeleteUser({
    //       variables: {
    //         where: {
    //           id: data.id,
    //         },
    //       },
    //       refetchQueries: [{ query: GET_USERS }],
    //       onCompleted(data) {
    //         ToastSuccess('Staff Deleted')
    //       },

    //     });
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // };





    //Update staff

    let [
        UpdateStudents,
        {
            loading: UPDATE_LOADING
        }] = useMutation(UPDATE_USER);
    const ctaUpdateHandler = async (event) => {
        event.preventDefault()
        if (!useEditData?.name) {
            ToastWarning('Name required')
        }
        else if (!useEditData?.email) {
            ToastWarning('Email required')
        }
        else if (!useEditData?.contact) {
            ToastWarning('contact required')
        }
        else if (!useEditData?.cnic) {
            ToastWarning('cnic required')
        }
        else if (!useEditData?.address) {
            ToastWarning('address required')
        }
        else if (!useEditData?.role) {
            ToastWarning('Role required')
        }
        else {
            try {
                await UpdateStudents({
                    variables: {
                        where: {
                            id: useEditId
                        },

                        data: {
                            name: {
                                set: useEditData?.name,
                            },
                            email: {
                                set: useEditData?.email,
                            },
                            password: {
                                set: useEditData?.password,
                            },
                            cnic: {
                                set: useEditData?.cnic,
                            },
                            address: {
                                set: useEditData?.address,
                            },
                            contact: {
                                set: useEditData?.contact,
                            },
                            role: {
                                set: useEditData?.role,
                            }
                        },
                    },
                    refetchQueries: [{ query: GET_USERS }],
                    onCompleted() {
                        // dispatch({
                        //     type: "setModal",
                        //     payload: {
                        //         modalUpdateFlag: false,
                        //         openFormModal: false,
                        //     },
                        // });
                        openModal(false)
                        updateFlag(false)
                        ToastSuccess('Staff Updated')

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
            exportTableData,
            ctaFormHandler,
            // ctaDeleteHandler,
            ctaUpdateHandler,
            formInputs,
            // ctaEditButtonHandler
        },
    ];
}

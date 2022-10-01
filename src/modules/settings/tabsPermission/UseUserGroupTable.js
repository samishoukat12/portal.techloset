import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import React, { useState, useContext } from "react";
import Axios from "axios";
import {
    ToastError,
    ToastSuccess,
    ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import {
    ADD_QUIZ,
    // DELETE_QUIZ,
    UPDATE_QUIZ
} from "../../../lib/mutation/AllMutations";
import { GET_QUIZ, GET_USERS, GET_USER_GROUP } from "../../../lib/queries/AllQueries";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify";
import FiltredData from "../../../constants/FiltredRoles";
import { openModal, updateFlag, editData, editId } from "../../../lib/reactivities/reactiveVarables";








export function UseTabsPermissions() {
    const useEditData = useReactiveVar(editData)
    const useEditId = useReactiveVar(editId)
    const [{ courseBatch, COURSE_DATA }] = FiltredData()
    const formInputs = [

        {
            // label: "Course Batches",
            // name: "userGroupName",
            type: "tabsPermissions",
            // dropDown: courseBatch
        },
        // {
        //     label: "Courses",
        //     name: "coursesId",
        //     type: "selectCourse",
        //     dropDown: COURSE_DATA

        // },
    ]





    //GET STAFF 

    let { data, loading: GET_LOADING, error } = useQuery(GET_USER_GROUP);



    console.log("error", error);
    const refacteredData = [];
    data?.userGroups?.map((item) => {
        refacteredData.push({
            id: item.id,
            name: item.userName,
            permissions: item?.tabsPermission?.navigationResults?.map((val) => {
                return val.pages

            }),
            tabs: item.tabsPermission,
            updateAt: item.updateAt,
            createdAt: item.createdAt,
            role: item.userGroupRole,
        });
    })
    console.log("refacteredData", refacteredData);


    //ADD STAFF

    let [CreateCourseQuiz, { loading: ADD_LOADING }] = useMutation(ADD_QUIZ);

    const ctaFormHandler = async (event) => {
        event.preventDefault();
        if (!useEditData?.courseBatchesId) {
            ToastWarning('Course Batches required')
        }
        else if (!useEditData?.coursesId) {
            ToastWarning('Courses required')
        }
        else {
            try {
                await CreateCourseQuiz({
                    variables: {

                        data: {
                            courseBatches: {
                                connect: {
                                    id: useEditData?.courseBatchesId
                                }
                            },
                            courses: {
                                connect: {
                                    id: useEditData?.coursesId
                                }
                            },
                        }

                    },
                    onCompleted(data, cache) {
                        // dispatch({
                        //     type: "setModal",
                        //     payload: {
                        //         modalUpdateFlag: false,
                        //         openFormModal: false,
                        //     },
                        // });
                        openModal(false)
                        updateFlag(false)
                        ToastSuccess('Quiz Added')

                    },
                    refetchQueries: [{ query: GET_QUIZ }],
                });
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

    // let [DeleteCourseQuiz, { loading: DELETE_LOADING }] = useMutation(DELETE_QUIZ);
    // const ctaDeleteHandler = async ({ ...data }) => {
    //     try {
    //         await DeleteCourseQuiz({
    //             variables: {
    //                 where: {
    //                     id: data.id,
    //                 },
    //             },
    //             onCompleted(data) {
    //                 ToastSuccess('Quiz Deleted')
    //             },
    //             refetchQueries: [{ query: GET_QUIZ }],
    //         });
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };





    //Update staff

    let [UpdateCourseQuiz, { loading: UPDATE_LOADING }] = useMutation(UPDATE_QUIZ);

    const ctaUpdateHandler = async (event) => {
        event.preventDefault()
        if (!useEditData.courseBatchesId) {
            ToastWarning('Course Batches required')
        }
        else if (!useEditData.coursesId) {
            ToastWarning('Courses required')
        }
        else {
            try {
                await UpdateCourseQuiz({
                    variables: {
                        where: {
                            id: useEditId
                        },

                        data: {
                            courseBatches: {
                                connect: {
                                    id: useEditData?.courseBatchesId
                                }
                            },
                            courses: {
                                connect: {
                                    id: useEditData?.coursesId
                                }
                            }
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
                        ToastSuccess('Quiz Updated')
                    },
                    refetchQueries: [{ query: GET_QUIZ }],
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

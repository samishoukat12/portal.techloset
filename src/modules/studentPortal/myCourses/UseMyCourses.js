import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import React, { useState, useContext } from "react";
import Axios from "axios";
import {
    ToastError,
    ToastSuccess,
    ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import {
    ADD_MY_COURSES,
    // DELETE_MY_COURSE,
    UPDATE_MY_COURSE
} from "../../../lib/mutation/AllMutations";
import { GET_MY_COURSES } from "../../../lib/queries/AllQueries";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify";
import FiltredData from "../../../constants/FiltredRoles";
import { openModal, updateFlag, editData, editId } from "../../../lib/reactivities/reactiveVarables";







export default function UseMyCourses() {
    const useEditId = useReactiveVar(editId)
    const useEditData = useReactiveVar(editData)
    console.log("Edit data in my courses", useEditData);
    const [{ student, COURSE_DATA, courseBatch }] = FiltredData()
    const formInputs = [
        {
            label: "Course",
            name: "coursesId",
            type: "selectCourse",
            dropDown: COURSE_DATA
        },
        {
            label: "Student",
            name: "studentId",
            type: "selectUser",
            dropDown: student
        },
        {
            label: "course Batche",
            name: "courseBatchesId",
            type: "selectBatch",
            dropDown: courseBatch
        },
        {
            label: "Status",
            name: "feeStatus",
            type: "select",
            dropDownContent: ["PAID", "PENDING", "HALFPAID"],
        },
    ]






    //GET STAFF 

    let { data, loading: GET_LOADING, error } = useQuery(GET_MY_COURSES);
    console.log("error", error);
    const refacteredData = [];
    data?.myCourses?.map((item) => {
        refacteredData.push({
            id: item.id,
            coursesId: item.coursesId,
            studentId: item.studentId,
            courseApproval: item.courseApproval,
            whyReject: item.whyReject,
            feeStatus: item.feeStatus,
            // courseBatchesId: item.courseBatchesId,
            updateAt: item.updateAt,
            createdAt: item.createdAt,
        });
    });
    console.log("refacteredData in useMyCourse", refacteredData);

    const [loader, setLoader] = useState(false);

    //ADD MY COURSE
    const AddMyCourseInCache = (cache, { data }) => {
        const newMyCourse = data.createMyCourse
        const myAllCourses = cache.readQuery({
            query: GET_MY_COURSES,
        })

        cache.writeQuery({
            query: GET_MY_COURSES,
            data: {
                myCourses: [
                    ...myAllCourses.myCourses,
                    newMyCourse
                ]
            }
        })
    };

    let [Mutation, { loading: ADD_LOADING }] = useMutation(ADD_MY_COURSES, {
        update: AddMyCourseInCache
    });

    const ctaFormHandler = async (event) => {
        event.preventDefault();
        if (!useEditData?.coursesId) {
            ToastWarning('Course required')
        }
        else if (!useEditData?.studentId) {
            ToastWarning('Student  required')
        }
        else if (!useEditData?.courseBatchesId) {
            ToastWarning('Course Batches required')
        }
        else if (!useEditData?.feeStatus) {
            ToastWarning('FeeStatus required')
        }
        else {
            try {
                await Mutation({
                    variables: {
                        data: {
                            courses: {
                                connect: {
                                    id: useEditData?.coursesId
                                }
                            },
                            student: {
                                connect: {
                                    id: useEditData?.studentId
                                }
                            },
                            courseBatches: {
                                connect: {
                                    id: useEditData?.courseBatchesId
                                }
                            },
                            feeStatus: useEditData?.feeStatus
                        }


                    },
                    onCompleted(data, cache) {
                        openModal(false)
                        updateFlag(false)
                        editData({})
                        ToastSuccess('Course Added')

                    },
                });
            } catch (error) {
                openModal(false)
                setLoader(false);
                ToastError(error.message);

            }
        }
    };





    // DELETE STAFF

    // let [DeleteMyCourse, { loading: DELETE_LOADING }] = useMutation(DELETE_MY_COURSE);
    // const ctaDeleteHandler = async ({ ...data }) => {
    //     try {
    //         await DeleteMyCourse({
    //             variables: {
    //                 where: {
    //                     id: data.id,
    //                 },
    //             },
    //             onCompleted(data) {
    //                 ToastSuccess('Course Deleted')
    //             },
    //             refetchQueries: [{ query: GET_MY_COURSES }],
    //         });
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };





    //Update staff

    let [UpdateMyCourse, { loading: UPDATE_LOADING }] = useMutation(UPDATE_MY_COURSE);

    const ctaUpdateHandler = async (event) => {
        event.preventDefault()
        if (!useEditData?.coursesId) {
            ToastWarning('Course required')
        }
        else if (!useEditData?.studentId) {
            ToastWarning('Student  required')
        }
        else if (!useEditData?.courseBatchesId) {
            ToastWarning('Course Batches required')
        }
        else if (!useEditData?.feeStatus) {
            ToastWarning('FeeStatus required')
        }
        else {
            try {
                await UpdateMyCourse({
                    variables: {
                        where: {
                            id: useEditId
                        },

                        data: {
                            courses: {
                                connect: {
                                    id: useEditData?.coursesId
                                }
                            },
                            student: {
                                connect: {
                                    id: useEditData?.studentId
                                }
                            },
                            courseBatches: {
                                connect: {
                                    id: useEditData?.courseBatchesId
                                }
                            },
                            feeStatus: {
                                set: useEditData?.feeStatus
                            }
                        }

                    },
                    onCompleted() {
                        openModal(false)
                        updateFlag(false)
                        editData({})
                        ToastSuccess('Course Updated')
                    },
                })

            } catch (error) {
                console.log(error.message);
            }
        }
    }
    return [
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
    ];
}

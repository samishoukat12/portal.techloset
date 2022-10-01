import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import { useState, useContext } from "react";
import {
    ToastError,
    ToastSuccess,
    ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import FiltredData from "../../../constants/FiltredRoles";
import {
    ADD_COURSE_BATCH,
    ADD_COURSE_CATEGORY,
    // DELETE_COURSE_BATCH,
    UPDATE_COURSE_BATCH,
    UPDATE_SINGLE_COURSE_CATEGORY
} from "../../../lib/mutation/AllMutations";
import { GET_COURSE_BATCH, GET_COURSE_CATEGORY } from "../../../lib/queries/AllQueries";
import { openModal, updateFlag, editData, editId } from "../../../lib/reactivities/reactiveVarables";








export default function UseCourseCategory() {
    const useEditData = useReactiveVar(editData)
    const useEditId = useReactiveVar(editId)
    const [{ COURSE_DATA }] = FiltredData()
    const formInputs = [
        {
            label: "Category Name",
            name: "categoryName",
            type: "text",
        },
        {
            label: "Image Url",
            name: "imageUrl",
            type: "text",
        },
    ]






    //GET STAFF 

    let { data, loading: GET_LOADING, error } = useQuery(GET_COURSE_CATEGORY);
    const refacteredData = [];
    data?.categories?.map((item) => {
        refacteredData.push({
            id: item.id,
            categoryName: item.categoryName,
            imageUrl: item.imageUrl,
            createdAt: item.createdAt,
            updateAt: item.updateAt,
        });
    });


    //ADD category
    const AddCategoryInCache = (cache, { data }) => {
        const newCategory = data.createCategory
        const courseCategories = cache.readQuery({
            query: GET_COURSE_CATEGORY,
        })

        cache.writeQuery({
            query: GET_COURSE_CATEGORY,
            data: {
                categories: [
                    ...courseCategories.categories,
                    newCategory
                ]
            }
        })
    };

    let [CreateCategory, { loading: ADD_LOADING }] = useMutation(ADD_COURSE_CATEGORY, {
        update: AddCategoryInCache
    });

    const ctaFormHandler = async (event) => {
        event.preventDefault();
        if (!useEditData?.categoryName) {
            ToastWarning('category Name required')
        } else if (!useEditData?.imageUrl) {
            ToastWarning('Image URL required')
        }
        else {
            try {
                await CreateCategory({
                    variables: {
                        data: {
                            categoryName: useEditData.categoryName,
                            imageUrl: useEditData.imageUrl
                        }

                    },
                    onCompleted(data, cache) {
                        openModal(false)
                        updateFlag(false)
                        editData({})
                        ToastSuccess('Category Added')

                    },
                });
            } catch (error) {
                openModal(false)
                ToastError(error.message);

            }
        }
    };





    // DELETE STAFF

    // let [DeleteCourseBatches, { loading: DELETE_LOADING }] = useMutation(DELETE_COURSE_BATCH);
    // const ctaDeleteHandler = async ({ ...data }) => {
    //     try {
    //         await DeleteCourseBatches({
    //             variables: {
    //                 where: {
    //                     id: data.id,
    //                 },
    //             },
    //             onCompleted(data) {
    //                 ToastSuccess('Course Deleted')
    //             },
    //             refetchQueries: [{ query: GET_COURSE_BATCH }],
    //         });
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };





    //Update staff

    let [UpdateCategory, { loading: UPDATE_LOADING }] = useMutation(UPDATE_SINGLE_COURSE_CATEGORY);

    const ctaUpdateHandler = async (event) => {
        event.preventDefault()
        if (!useEditData?.categoryName) {
            ToastWarning('categoryName required')
        } else if (!useEditData?.imageUrl) {
            ToastWarning('Image URL required')
        }
        else {
            try {
                await UpdateCategory({
                    variables: {

                        data: {
                            categoryName: {
                                set: useEditData?.categoryName
                            },
                            imageUrl: {
                                set: useEditData?.imageUrl
                            }
                        },
                        where: {
                            id: useEditId
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

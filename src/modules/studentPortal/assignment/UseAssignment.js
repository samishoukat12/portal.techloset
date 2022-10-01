import { useMutation, useQuery, useReactiveVar } from "@apollo/client"
import React, { useState, useContext } from "react"
import Axios from "axios"
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction"
import {
  ADD_ASSIGNMENT,
  ADD_COURSES,
  // DELETE_ASSIGNMENT,
  UPDATE_ASSIGNMENT,
} from "../../../lib/mutation/AllMutations"
import { GET_ASSIGNMENT, GET_COURSES } from "../../../lib/queries/AllQueries"
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify"
import FiltredData from "../../../constants/FiltredRoles"
import {
  openModal,
  updateFlag,
  editData,
  editId,
  userData,
} from "../../../lib/reactivities/reactiveVarables"

export default function UseAssignment() {
  const useEditId = useReactiveVar(editId)
  const useEditData = useReactiveVar(editData)
  const useUserData = useReactiveVar(userData)
  const [{ courseBatch, COURSE_DATA }] = FiltredData()
  const formInputs = [
    {
      label: "Name",
      name: "name",
      type: "text",
    },
    {
      label: "Course Batches",
      name: "courseBatchesId",
      type: "selectBatch",
      dropDown: courseBatch,
    },
    {
      label: "Courses",
      name: "coursesId",
      type: "selectCourse",
      dropDown: COURSE_DATA,
    },
  ]

  //GET STAFF

  let { data, loading: GET_LOADING, error } = useQuery(GET_ASSIGNMENT)
  console.log("error", error)
  let courseIds = []
  let refacteredData = []
  // Getting Current Teacher's own courses
  if (useUserData.userGroup.userGroupRole === "TEACHER") {
    let { data } = useQuery(GET_COURSES)
    console.log("courseData", data.findManyCourses)
    courseIds = data?.findManyCourses
      ?.filter((data) => data.instructorId === useUserData.id)
      .map((data) => data.id)
    console.log("courseIds", courseIds)
  }
  // filtering the assignments on basis of Current Teacher's own courses
  if (useUserData.userGroup.userGroupRole === "TEACHER") {
    refacteredData = data?.courseAssignments?.filter((data) =>
      courseIds.includes(data.coursesId)
    )
    console.log("refacteredData lecture data", refacteredData)
  } else {
    refacteredData = data?.courseAssignments
    console.log("refacteredData lecture data", refacteredData)
  }

  const [loader, setLoader] = useState(false)

  //ADD Assignment
  const AddAssignmentInCache = (cache, { data }) => {
    const newAssignment = data.createCourseAssignment
    const assignments = cache.readQuery({
      query: GET_ASSIGNMENT,
    })

    cache.writeQuery({
      query: GET_ASSIGNMENT,
      data: {
        courseAssignments: [...assignments.courseAssignments, newAssignment],
      },
    })
  }

  let [CreateCourseAssignment, { loading: ADD_LOADING }] = useMutation(
    ADD_ASSIGNMENT,
    {
      update: AddAssignmentInCache,
    }
  )

  const ctaFormHandler = async (event) => {
    event.preventDefault()
    if (!useEditData?.courseBatchesId) {
      ToastWarning("Course Batches required")
    } else if (!useEditData?.name) {
      ToastWarning("Name required")
    } else if (!useEditData?.coursesId) {
      ToastWarning("Courses required")
    } else {
      try {
        await CreateCourseAssignment({
          variables: {
            data: {
              name: useEditData?.name,
              CourseBatches: {
                connect: {
                  id: useEditData?.courseBatchesId,
                },
              },
              courses: {
                connect: {
                  id: useEditData?.coursesId,
                },
              },
            },
          },
          onCompleted(data, cache) {
            openModal(false)
            updateFlag(false)
            editData({})
            ToastSuccess("Assignment Added")
          },
        })
      } catch (error) {
        openModal(false)
        setLoader(false)
        ToastError(error.message)
      }
    }
  }

  // DELETE STAFF

  // let [DeleteCourseAssignment, { loading: DELETE_LOADING }] = useMutation(DELETE_ASSIGNMENT);
  // const ctaDeleteHandler = async ({ ...data }) => {
  //     try {
  //         await DeleteCourseAssignment({
  //             variables: {
  //                 where: {
  //                     id: data.id,
  //                 },
  //             },
  //             onCompleted(data) {
  //                 ToastSuccess('Course Deleted')
  //             },
  //             refetchQueries: [{ query: GET_ASSIGNMENT }],
  //         });
  //     } catch (error) {
  //         console.log(error.message);
  //     }
  // };

  //Update staff

  let [UpdateCourseAssignment, { loading: UPDATE_LOADING }] =
    useMutation(UPDATE_ASSIGNMENT)

  const ctaUpdateHandler = async (event) => {
    event.preventDefault()
    if (!useEditData?.courseBatchesId) {
      ToastWarning("Course Batches required")
    } else if (!useEditData?.name) {
      ToastWarning("Name required")
    } else if (!useEditData?.coursesId) {
      ToastWarning("Courses required")
    } else {
      try {
        await UpdateCourseAssignment({
          variables: {
            where: {
              id: useEditId,
            },

            data: {
              name: {
                set: useEditData?.name,
              },
              CourseBatches: {
                connect: {
                  id: useEditData?.courseBatchesId,
                },
              },
              courses: {
                connect: {
                  id: useEditData?.coursesId,
                },
              },
            },
          },
          onCompleted() {
            openModal(false)
            updateFlag(false)
            editData({})
            ToastSuccess("Course Updated")
          },
        })
      } catch (error) {
        console.log(error.message)
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
  ]
}

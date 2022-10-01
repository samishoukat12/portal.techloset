import { useMutation, useQuery, useReactiveVar } from "@apollo/client"
import React, { useState, useContext } from "react"
import Axios from "axios"
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction"
import {
  ADD_LECTURES,
  // DELETE_LECTURE,
  UPDATE_LECTURES,
} from "../../../lib/mutation/AllMutations"
import { GET_COURSES, GET_LECTURES } from "../../../lib/queries/AllQueries"
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

export default function UseLecture() {
  const useEditId = useReactiveVar(editId)
  const useEditData = useReactiveVar(editData)
  const useUserData = useReactiveVar(userData)
  console.log("Lectures edit data", useEditData)
  const [{ COURSE_DATA }] = FiltredData()
  const formInputs = [
    {
      label: "Lecture Title",
      name: "lectureTitle",
      type: "text",
    },
    {
      label: "Lecture Video",
      name: "lectureVideo",
      type: "text",
    },
    {
      label: "Course",
      name: "coursesId",
      type: "selectCourse",
      dropDown: COURSE_DATA,
    },
  ]

  //GET STAFF

  //

  let { data, loading: GET_LOADING, error } = useQuery(GET_LECTURES)
  console.log("error", error)
  let courseIds = []
  let refacteredData = []
  if (useUserData.userGroup.userGroupRole === "TEACHER") {
    let { data } = useQuery(GET_COURSES)
    console.log("courseData", data.findManyCourses)
    courseIds = data?.findManyCourses
      ?.filter((data) => data.instructorId === useUserData.id)
      .map((data) => data.id)
    console.log("courseIds", courseIds)
  }
  if (useUserData.userGroup.userGroupRole === "TEACHER") {
    refacteredData = data?.findManyLectures?.filter((data) =>
      courseIds.includes(data.coursesId)
    )
    console.log("refacteredData lecture data", refacteredData)
  } else {
    refacteredData = data?.findManyLectures
    console.log("refacteredData lecture data", refacteredData)
  }

  const [loader, setLoader] = useState(false)

  //ADD Lecture
  const AddLectureInCache = (cache, { data }) => {
    const newLecture = data.createLectures
    const lectures = cache.readQuery({
      query: GET_LECTURES,
    })

    cache.writeQuery({
      query: GET_LECTURES,
      data: {
        findManyLectures: [...lectures.findManyLectures, newLecture],
      },
    })
  }

  let [CreateLectures, { loading: ADD_LOADING }] = useMutation(ADD_LECTURES, {
    update: AddLectureInCache,
  })

  const ctaFormHandler = async (event) => {
    event.preventDefault()
    if (!useEditData?.lectureTitle) {
      ToastWarning("Lecture Title required")
    } else if (!useEditData?.lectureVideo) {
      ToastWarning("Lecture Video required")
    } else if (!useEditData?.coursesId) {
      ToastWarning("Course required")
    } else {
      try {
        await CreateLectures({
          variables: {
            data: {
              lectureTitle: useEditData?.lectureTitle,
              lectureVideo: useEditData?.lectureVideo,
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
            ToastSuccess("Lecture Added")
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

  // let [DeleteLectures, { loading: DELETE_LOADING }] = useMutation(DELETE_LECTURE);
  // const ctaDeleteHandler = async ({ ...data }) => {
  //     try {
  //         await DeleteLectures({
  //             variables: {
  //                 where: {
  //                     id: data.id,
  //                 },
  //             },
  //             onCompleted(data) {
  //                 ToastSuccess('Course Deleted')
  //             },
  //             refetchQueries: [{ query: GET_LECTURES }],
  //         });
  //     } catch (error) {
  //         console.log(error.message);
  //     }
  // };

  //Update staff

  let [UpdateLectures, { loading: UPDATE_LOADING }] =
    useMutation(UPDATE_LECTURES)

  const ctaUpdateHandler = async (event) => {
    event.preventDefault()
    if (!useEditData?.lectureTitle) {
      ToastWarning("Lecture Title required")
    } else if (!useEditData?.lectureVideo) {
      ToastWarning("Lecture Video required")
    } else if (!useEditData?.coursesId) {
      ToastWarning("Course required")
    } else {
      try {
        await UpdateLectures({
          variables: {
            where: {
              id: useEditId,
            },
            data: {
              lectureTitle: {
                set: useEditData?.lectureTitle,
              },
              lectureVideo: {
                set: useEditData?.lectureVideo,
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

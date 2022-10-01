import {
  useMutation,
  useQuery,
  readQuery,
  useReactiveVar,
} from "@apollo/client"

import React, { useState, useContext } from "react"
import Axios from "axios"
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../commonComponents/commonFunction/CommonFunction"
import {
  ADD_COURSES,
  UPDATE_SINGLE_COURSE,
  // DELETE_SINGLE_COURSE
} from "../../lib/mutation/AllMutations"
import { CASHED_COURSES, GET_COURSES } from "../../lib/queries/AllQueries"
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify"
import FiltredData from "../../constants/FiltredRoles"
import { useApolloClient } from "@apollo/client"
import {
  openModal,
  updateFlag,
  editData,
  editId,
  userData,
} from "../../lib/reactivities/reactiveVarables"

export function UseCourses() {
  const useEditData = useReactiveVar(editData)
  const useEditId = useReactiveVar(editId)
  const useUserData = useReactiveVar(userData)

  console.log("Edit data in courses", useEditData)
  console.log("Edit id in courses", useEditId)
  //GET_CATEGORIES
  const [{ teacher, CATEGORY_DATA }] = FiltredData()
  // const client = useApolloClient()
  // const { findManyCourses:{
  //   courseName,
  // } } = client.readQuery({
  //   query: GET_COURSES,
  //   // variables: { // Provide any required variables here.  Variables of mismatched types will return `null`.
  //   //   id: 5,
  //   // },
  // });

  // console.log("Courses data in cache", findManyCourses);
  const formInputs = [
    {
      label: "Name",
      name: "courseName",
      type: "text",
    },
    {
      label: "Description",
      name: "courseDesc",
      type: "text",
    },
    {
      label: "Intro",
      name: "courseIntro",
      type: "text",
    },
    {
      label: "Price",
      name: "coursePrice",
      type: "number",
    },
    {
      label: "Course Category Id",
      name: "courseCategoryId",
      type: "selectCategory",
      dropDown: CATEGORY_DATA,
    },
    {
      label: "Select Instructor",
      name: "instructorId",
      type: "selectInstructor",
      dropDown: teacher,
    },
    {
      label: "Status",
      name: "courseStatus",
      type: "select",
      dropDownContent: ["PUBLISH", "UNPUBLISH"],
    },
  ]

  //GET Courses

  //   let { data } = useQuery(CASHED_COURSES);
  //   let [ getCourses, {data: networkCourses, loading: GET_LOADING, error} ] = useLazyQuery(GET_COURSES);
  //   useEffect(() => {
  //     getCourses();
  //   }, []);

  //   useEffect(()=> {
  //     client.writeQuery({
  //       query: CASHED_COURSES,
  //       data: {
  //         courses: networkCourses
  //       }
  //     })
  //   }, [networkCourses])
  //   console.log("coursesData", data);
  //   const refacteredData = [];
  //   data?.courses?.findManyCourses?.map((item) => {
  //     refacteredData.push({
  //       id: item.id,
  //       courseName: item.courseName,
  //       courseDesc: item.courseDesc,
  //       courseIntro: item.courseIntro,
  //       courseStatus: item.courseStatus,
  //       coursePrice: item.coursePrice,
  //       instructorId: item.instructorId,
  //       courseCategoryId: item.courseCategoryId,
  //     });
  //   });
  //   console.log("refacteredData", refacteredData);

  let { data, loading: GET_LOADING, error } = useQuery(GET_COURSES)
  console.log("error", error)
  const getRefacteredData = (array) => {
    if (useUserData?.userGroup?.userGroupRole === "TEACHER") {
      return array?.filter((data) => {
        if (data.instructorId === useUserData.id) {
          return {
            id: data.id,
            courseName: data.courseName,
            courseDesc: data.courseDesc,
            courseIntro: data.courseIntro,
            courseStatus: data.courseStatus,
            coursePrice: data.coursePrice,
            instructorId: data.instructorId,
            courseCategoryId: data.courseCategoryId,
            createdAt: data.createdAt,
          }
        }
      })
      // .map((data) => {

      // })
    } else {
      return array?.map((data) => {
        return {
          id: data.id,
          courseName: data.courseName,
          courseDesc: data.courseDesc,
          courseIntro: data.courseIntro,
          courseStatus: data.courseStatus,
          coursePrice: data.coursePrice,
          instructorId: data.instructorId,
          courseCategoryId: data.courseCategoryId,
          createdAt: data.createdAt,
        }
      })
    }
  }
  let refacteredData = getRefacteredData(data?.findManyCourses)
  // data?.findManyCourses?.map((item) => {
  //   refacteredData.push({
  //     id: item.id,
  //     courseName: item.courseName,
  //     courseDesc: item.courseDesc,
  //     courseIntro: item.courseIntro,
  //     courseStatus: item.courseStatus,
  //     coursePrice: item.coursePrice,
  //     instructorId: item.instructorId,
  //     courseCategoryId: item.courseCategoryId,
  //     createdAt: item.createdAt,
  //   })
  // })
  console.log("refacteredData", refacteredData)

  const [loader, setLoader] = useState(false)

  //ADD Course
  const handleClickOpen = () => {
    openModal(true)
  }

  const AddCourseInCache = (cache, { data }) => {
    const newCourse = data.createCourses
    const courses = cache.readQuery({
      query: GET_COURSES,
    })

    cache.writeQuery({
      query: GET_COURSES,
      data: {
        findManyCourses: [...courses.findManyCourses, newCourse],
      },
    })
  }

  let [CreateCourses, { loading: ADD_LOADING }] = useMutation(ADD_COURSES, {
    update: AddCourseInCache,
  })

  const ctaFormHandler = async (event) => {
    event.preventDefault()
    if (!useEditData?.courseName) {
      ToastWarning("Course name required")
    } else if (!useEditData?.courseDesc) {
      ToastWarning("Course description required")
    } else if (!useEditData?.courseIntro) {
      ToastWarning("Intro required")
    } else if (!useEditData?.coursePrice) {
      ToastWarning("Price required")
    } else if (!useEditData?.instructorId) {
      ToastWarning("Instructor Id required")
    } else if (!useEditData?.courseCategoryId) {
      ToastWarning("Course category Id required")
    } else if (!useEditData?.courseStatus) {
      ToastWarning("Status required")
    } else {
      try {
        await CreateCourses({
          variables: {
            data: {
              courseName: useEditData?.courseName,
              courseDesc: useEditData?.courseDesc,
              instructor: {
                connect: {
                  id: useEditData?.instructorId,
                },
              },
              courseIntro: useEditData?.courseIntro,
              courseCategory: {
                connect: {
                  id: useEditData?.courseCategoryId,
                },
              },
              organization: {
                connect: {
                  id: useUserData?.id,
                },
              },
              coursePrice: useEditData?.coursePrice,
              createdAt: new Date(),
            },
          },
          onCompleted(data, cache) {
            openModal(false)
            updateFlag(false)
            editData({})
            ToastSuccess("Course Added")
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

  // let [DeleteCourses, { loading: DELETE_LOADING }] = useMutation(DELETE_SINGLE_COURSE);
  // const ctaDeleteHandler = async ({ ...data }) => {
  //   try {
  //     await DeleteCourses({
  //       variables: {
  //         where: {
  //           id: data.id,
  //         },
  //       },
  //       onCompleted(data) {
  //         ToastSuccess('Course Deleted')
  //       },
  //       refetchQueries: [{ query: GET_COURSES }],
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  //Update staff

  let [UpdateCourses, { loading: UPDATE_LOADING }] =
    useMutation(UPDATE_SINGLE_COURSE)

  const ctaUpdateHandler = async (event) => {
    event.preventDefault()
    if (!useEditData?.courseName) {
      ToastWarning("Course name required")
    } else if (!useEditData?.courseDesc) {
      ToastWarning("Course description required")
    } else if (!useEditData?.courseIntro) {
      ToastWarning("Intro required")
    } else if (!useEditData?.coursePrice) {
      ToastWarning("Price required")
    } else if (!useEditData?.instructorId) {
      ToastWarning("Instructor Id required")
    } else if (!useEditData?.courseCategoryId) {
      ToastWarning("Course category Id required")
    } else if (!useEditData?.courseStatus) {
      ToastWarning("Status required")
    } else {
      try {
        await UpdateCourses({
          variables: {
            where: {
              id: useEditId,
            },
            data: {
              courseName: {
                set: useEditData?.courseName,
              },
              courseDesc: {
                set: useEditData?.courseDesc,
              },
              courseIntro: {
                set: useEditData?.courseIntro,
              },
              instructor: {
                connect: {
                  id: useEditData?.instructorId,
                },
              },
              courseCategory: {
                connect: {
                  id: useEditData?.courseCategoryId,
                },
              },
              organization: {
                connect: {
                  id: useUserData?.id,
                },
              },
              coursePrice: {
                set: useEditData?.coursePrice,
              },
              courseStatus: {
                set: useEditData?.courseStatus,
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
      //,
      ctaUpdateHandler,
      formInputs,
      handleClickOpen,
    },
  ]
}

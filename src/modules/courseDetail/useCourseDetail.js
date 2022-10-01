import { useState } from "react";
import { useQuery, useMutation,useReactiveVar } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_COURSES, GET_LECTURES } from "../../lib/queries/AllQueries";
import { ADD_LECTURES,UPDATE_LECTURES } from "../../lib/mutation/AllMutations";
import { openModal,editData, editId,updateFlag } from "../../lib/reactivities/reactiveVarables";
import FiltredData from "../../constants/FiltredRoles";
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../commonComponents/commonFunction/CommonFunction";

export default function useCourseDetail() {
  let params = useParams();
  const useEditId = useReactiveVar(editId)
  const useEditData = useReactiveVar(editData)
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
      dropDown: COURSE_DATA
    },
  ]

  let { data, loading: GET_LOADING, error } = useQuery(GET_COURSES);
  console.log("error", error);
  const refacteredData = [];
  data?.findManyCourses?.map((item) => {
    refacteredData.push({
      id: item.id,
      courseName: item.courseName,
      courseDesc: item.courseDesc,
      courseIntro: item.courseIntro,
      courseStatus: item.courseStatus,
      coursePrice: item.coursePrice,
      instructorId: item.instructorId,
      courseCategoryId: item.courseCategoryId,
      createdAt: item.createdAt
    });
  });
  const courseData = refacteredData.find(item => item.id === params.courseId);

  let { data: leactureData, loading: GET_Leacture_LOADING, error: LectureError } = useQuery(GET_LECTURES);
  console.log("error", LectureError);
  const refacteredDataLecture = [];
  leactureData?.findManyLectures?.map((item) => {
    refacteredDataLecture.push({
      id: item.id,
      coursesId: item.coursesId,
      lectureTitle: item.lectureTitle,
      lectureVideo: item.lectureVideo,
      createdAt: item.createdAt,
      updateAt: item.updateAt,
    });
  });
  console.log({ refacteredDataLecture });
  const leacturesData = refacteredDataLecture.filter((item) => item.coursesId === params.courseId);

  const handleClickOpen = () => {
    openModal(true)
  };

  const [loader, setLoader] = useState(false);
  //ADD STAFF

  let [CreateLectures, { loading: ADD_LOADING }] = useMutation(ADD_LECTURES);

  const ctaFormHandler = async (event) => {
    event.preventDefault();
    if (!useEditData?.lectureTitle) {
      ToastWarning('Lecture Title required')
    }
    else if (!useEditData?.lectureVideo) {
      ToastWarning('Lecture Video required')
    }
    else if (!useEditData?.coursesId) {
      ToastWarning('Course required')
    }
    else {
      try {
        await CreateLectures({
          variables: {

            data: {
              lectureTitle: useEditData?.lectureTitle,
              lectureVideo: useEditData?.lectureVideo,
              courses: {
                connect: {
                  id: useEditData?.coursesId
                }
              }
            }

          },
          onCompleted(data, cache) {
            openModal(false)
            updateFlag(false)
            editData({})
            ToastSuccess('Lecture Added')
          },
          refetchQueries: [{ query: GET_LECTURES }],
        });
      } catch (error) {
        openModal(false)
        setLoader(false);
        ToastError(error.message);
      }
    }
  };

   //Update staff

   let [UpdateLectures, { loading: UPDATE_LOADING }] = useMutation(UPDATE_LECTURES);

   const ctaUpdateHandler = async (event) => {
       event.preventDefault()
       if (!useEditData?.lectureTitle) {
           ToastWarning('Lecture Title required')
       }
       else if (!useEditData?.lectureVideo) {
           ToastWarning('Lecture Video required')
       }
       else if (!useEditData?.coursesId) {
           ToastWarning('Course required')
       }
       else {
           try {
               await UpdateLectures({
                   variables: {
                       where: {
                           id: useEditId
                       },
                       data: {
                           lectureTitle: {
                               set: useEditData?.lectureTitle
                           },
                           lectureVideo: {
                               set: useEditData?.lectureVideo
                           },
                           courses: {
                               connect: {
                                   id: useEditData?.coursesId
                               }
                           }
                       }
                   },
                   onCompleted() {
                       openModal(false)
                       updateFlag(false)
                       editData({})
                       ToastSuccess('Course Updated')
                   },
                   refetchQueries: [{ query: GET_COURSES }],
               })

           } catch (error) {
               console.log(error.message);
           }
       }
   }
   const ctaEditButtonHandler = (data) => {
    const test = useEditData;
    editId(data.id)
    openModal(true)
    updateFlag(true)
    formInputs.map((item) => {
        test[item.name] = data[item.name];
    });
    editData(test)
    // if (
    //     data.role === "ORGANIZATIONKEY" ||
    //     data.role === "ADMIN" ||
    //     data.role === "TEACHER" ||
    //     data.role === "STUDENT"
    // ) {
    //     userGroupData(data)
    // }
};
  return ({
    courseData,
    GET_LOADING,
    GET_Leacture_LOADING,
    leacturesData,
    handleClickOpen,
    formInputs,
    ADD_LOADING,
    loader,
    ctaFormHandler,
    ctaUpdateHandler,
    UPDATE_LOADING,
    ctaEditButtonHandler
  })
}

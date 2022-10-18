import { useQuery, useReactiveVar } from "@apollo/client"
import { useEffect, useMemo } from "react"
import {
  GET_ALL_ORGANIZATION,
  GET_COURSES,
  GET_COURSE_BATCH,
  GET_COURSE_CATEGORY,
  GET_SPEAKERS,
  GET_USERS,
  GET_USER_GROUP,
  GET_EVENTS,
} from "../lib/queries/AllQueries"
import { userData } from "../lib/reactivities/reactiveVarables"

export default function FiltredData() {
  const useUserData = useReactiveVar(userData)
  //ROLES OF STAFF AND STUDENTS
  const { data: USER_DATA, loading: USER_LOADING } = useQuery(GET_USERS)
  const { data: ALL_COURSES, loading: COURSE_LOADING } = useQuery(GET_COURSES)
  const { data: CATEGORY_DATA, loading: CATEGORY_LOADING } =
    useQuery(GET_COURSE_CATEGORY)
  const { data: SPEAKERS, loading: SPEAKERS_LOADING } = useQuery(GET_SPEAKERS)
  const { data: COURSE_BATCH, loading: BATCH_LOADING } =
    useQuery(GET_COURSE_BATCH)
  const { data: USER_GROUPS, loading: USER_GROUP_LOADING } =
    useQuery(GET_USER_GROUP)
  const { data: ALL_ORG, loading: ALL_ORG_LOADING } =
    useQuery(GET_ALL_ORGANIZATION)
  const {
    data: ALL_EVENTS,
    loading: EVENTS_LOADING,
    error,
  } = useQuery(GET_EVENTS)

  const getCourseData = () => {
    if (useUserData?.userGroup?.userGroupRole === "TEACHER") {
      let arr = ALL_COURSES?.findManyCourses?.filter(
        (data) => data.instructorId === useUserData.id
      )
      console.log({
        findManyCourses: arr,
      })
      return {
        findManyCourses: arr,
      }
    } else {
      console.log(ALL_COURSES)
      return ALL_COURSES
    }
  }

  const COURSE_DATA = useMemo(() => getCourseData(), [useUserData])

  const getStudent = () => {
    if (useUserData?.userGroup?.userGroupRole === "TEACHER") {
      let courseIds = ALL_COURSES?.findManyCourses
        ?.filter((data) => data.instructorId === useUserData.id)
        .map((data) => data.id)
      return USER_DATA?.users?.filter((item) => {
        if (
          item.myCourse.some((innerItem) =>
            courseIds.includes(innerItem["coursesId"])
          )
        ) {
          return item
        }
      })
    } else {
      return USER_DATA?.users?.filter((role) => {
        return role.userGroup.userGroupRole === "STUDENT"
      })
    }
  }

  const student = useMemo(() => getStudent(), [useUserData])

  const teacher = USER_DATA?.users?.filter((role) => {
    return role?.userGroup?.userGroupRole === "TEACHER"
  })

  const admin = USER_DATA?.users?.filter((role) => {
    return role?.userGroup?.userGroupRole === "ADMIN"
  })

  const userGroup = USER_GROUPS?.userGroups?.filter((role) => {
    if (role?.userGroupRole.toUpperCase() !== "STUDENT") {
      return role
    } else if (role?.userGroupRole.toUpperCase() !== "ORGANIZATIONKEY") {
      return role
    } else if (role?.userGroupRole.toUpperCase() !== "OWNER") {
      return role
    }
  })

  const userGroupStudent = USER_GROUPS?.userGroups?.filter((role) => {
    if (role?.userGroupRole.toUpperCase() === "STUDENT") {
      return role
    }
  })
  const userGroupOrganization = USER_GROUPS?.userGroups?.filter((role) => {
    if (role?.userGroupRole.toUpperCase() === "ORGANIZATIONKEY") {
      return role
    } else if (role?.userGroupRole.toUpperCase() === "OWNER") {
      return role
    }
  })
  const allOrg = ALL_ORG?.findManyOrganizations?.map((item) => {
    return item
  })
  const speakerList = SPEAKERS?.speakers?.filter((item) => {
    return item
  })

  const getCourseBatch = () => {
    if (useUserData?.userGroup?.userGroupRole === "TEACHER") {
      let teacherBatches = useUserData.teachCourses.map((item) => {
        return item.courseCategory.categoryName
      })
      return COURSE_BATCH?.findManyCourseBatches?.filter((item) =>
        teacherBatches.includes(item.courseName)
      )
    } else {
      return COURSE_BATCH?.findManyCourseBatches
    }
  }
  const courseBatch = getCourseBatch()
  const eventList = ALL_EVENTS?.findManyEvents?.length

  return [
    {
      student,
      teacher,
      admin,
      speakerList,
      courseBatch,
      allOrg,
      ALL_ORG_LOADING,
      USER_LOADING,
      CATEGORY_DATA,
      COURSE_LOADING,
      CATEGORY_LOADING,
      SPEAKERS_LOADING,
      COURSE_DATA,
      BATCH_LOADING,
      USER_GROUP_LOADING,
      userGroup,
      userGroupStudent,
      userGroupOrganization,
      eventList,
    },
  ]
}

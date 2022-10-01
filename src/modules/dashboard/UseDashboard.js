import { useQuery } from '@apollo/client';
import { useContext, useEffect } from 'react';
import FiltredData from '../../constants/FiltredRoles';
import {
    GET_ALL_ORGANIZATION,
    GET_COURSES,
    GET_ENROLLMENT,
    GET_EVENTS,
    GET_SUCCESS_STORIES,
    GET_USERS
} from '../../lib/queries/AllQueries';
export default function UseDashboard() {
    let {
        data: COURSE_DATA,
        loading: COURSE_LOADING
    } = useQuery(GET_COURSES);
    let {
        data: EVENTS_DATA,
        loading: EVENTS_LOADING
    } = useQuery(GET_EVENTS);
    let {
        data: ENROLLEMTENT,
        LOADING: ENROLMENT_LOADING
    } = useQuery(GET_ENROLLMENT)
    let {
        data: SUCCESS_DATA,
        loading: SUCCESS_LOADING
    } = useQuery(GET_SUCCESS_STORIES);
    const [{
        student,
        teacher,
        admin,
        userGroupOrganization,
        speakerList,
        courseBatch,
        allOrg,
        USER_LOADING,
        ALL_ORG_LOADING,
        USERS_LOADING,
        CATEGORY_LOADING,
        SPEAKERS_LOADING,
        USER_GROUP_LOADING,
        BATCH_LOADING,
        eventList
    }] = FiltredData()
    let studentLength = student?.length
    let successLength = SUCCESS_DATA?.findManySuccessStories?.length
    // let eventLength = EVENTS_DATA?.findManyEvents?.length
    let eventLength = eventList
    let courseLength = COURSE_DATA?.findManyCourses?.length
    let TeacherLength = teacher?.length
    let AdminLength = admin?.length
    let speakerListLength = speakerList?.length
    let courseBatchlength = courseBatch?.length
    let enrollement = ENROLLEMTENT?.enrollmentApprovals?.length
    let userGroupOrganizationLength = userGroupOrganization?.length
    let all_org = allOrg?.length


    // const {
    //     data: USER_DATA,
    //     loading: USER_LOADING2
    // } = useQuery(GET_USERS)
    // const {
    //     data: ORG_DATA,
    //     loading: ORG_DATA_LOGIN
    // } = useQuery(GET_ALL_ORGANIZATION)

    // const refetchData = () => {
    //     const student = USER_DATA?.users?.map((role) => {
    //         if (role.userGroup.userGroupRole === 'STUDENT') {
    //             return role
    //         }
    //     })
    //     console.log(student)



    //     const teacher = USER_DATA?.users?.filter((role) => {
    //         if (role.userGroup.userGroupRole === 'TEACHER') {
    //             return role
    //         }
    //     })

    //     const organizationDetails = ORG_DATA?.findManyOrganizations.map((item) => {
    //         if (item.role === "ORGANIZATIONKEY") {
    //             return item
    //         }

    //     })

    //     const admin = USER_DATA?.users?.filter((role) => {
    //         if (role.userGroup.userGroupRole === 'ADMIN') {
    //             return role
    //         }
    //     })

    //     const organizationDetails = ORG_DATA?.findManyOrganizations.map((item) => {
    //         if (item.role === "ORGANIZATIONKEY") {
    //             return item
    //         }

    //     })

    //     dispatch({
    //         type: "setUsersObj",
    //         payload: {
    //             students: student.length,
    //             teachers: teacher.length,
    //             admins: admin.length,
    //             organizationDetails: organizationDetails.length,
    //             ORG_DATA_LOGIN: ORG_DATA_LOGIN,
    //             USER_LOADING: USER_LOADING2
    //         }
    //     })
    // }




    return [{
        AdminLength,
        TeacherLength,
        studentLength,
        successLength,
        courseBatchlength,
        all_org,
        ALL_ORG_LOADING,
        USER_LOADING,
        enrollement,
        eventLength,
        userGroupOrganizationLength,
        courseLength,
        speakerListLength,
        ENROLMENT_LOADING,
        COURSE_LOADING,
        USERS_LOADING,
        EVENTS_LOADING,
        CATEGORY_LOADING,
        SPEAKERS_LOADING,
        SUCCESS_LOADING,
        BATCH_LOADING,
        USER_GROUP_LOADING
    }];
}
import { gql } from "@apollo/client";


export const ADD_ENROLMMENT_APPROVAL = gql`
mutation CreateEnrollmentApproval($data: EnrollmentApprovalCreateInput!) {
  createEnrollmentApproval(data: $data) {
    id
    userId
    coursesId
    status
    paymentMethod
    amount
    transactionId
  }
}
`
export const ADD_SPEAKERS = gql`
mutation CreateSpeaker($data: SpeakerCreateInput!) {
  createSpeaker(data: $data) {
    id
    speakerName
    spkearDesc
    spekaerImage
    createdAt
    updateAt
  }
}
`


export const ADD_USER_GROUP = gql`
mutation CreateUserGroup($data: UserGroupCreateInput!) {
  createUserGroup(data: $data) {
    id
    userName
    userGroupRole
    tabsPermission
    createdAt
    updateAt
  }
}
`






export const ADD_COURSES = gql`
mutation CreateCourses($data: CoursesCreateInput!) {
  createCourses(data: $data) {
    id
    courseName
    courseDesc
    courseIntro
    instructorId
    courseCategoryId
    organizationId
    coursePrice
    whatYouLearn
  }
}
`


export const ADD_SUCCESS_STORY = gql`
mutation CreateSuccessStories($data: SuccessStoriesCreateInput!) {
  createSuccessStories(data: $data) {
    id
    freelancingProfileUrl
    paymentProof
    description
    status
    totalEarnedAmount
    city
    whyReject
  }
}
`

export const ADD_EVENTS = gql`
mutation CreateEvents($data: EventsCreateInput!) {
  createEvents(data: $data) {
    id
    eventName
    eventImage
    eventDesc
    eventDate
    eventStatus
    speakerId
  }
}
`


export const ADD_CONTACT_US = gql`
mutation CreateContactUs($data: ContactUsCreateInput!) {
  createContactUs(data: $data) {
    name
    subject
    message
    status
    reply
  }
}
`

export const ADD_FAQS = gql`
mutation CreateFaq($data: FaqCreateInput!) {
  createFaq(data: $data) {
    faqQuestion
    faqAnswer
    courseId
    id
    createdAt
    updateAt
  }
}`

export const ADD_USER = gql`
mutation Register($data: UserCreateInput!) {
  register(data: $data) {
    id
    userGroup {
      userGroupRole
      userName
      id
      tabsPermission
      updateAt
    createdAt
    }
    name
    email
    cnic
    address
    contact
    status
    permission
    token
  }
}
`
export const ADD_COURSE_CATEGORY = gql`
mutation CreateCategory($data: CategoryCreateInput!) {
  createCategory(data: $data) {
    id
    categoryName
    imageUrl
    createdAt
    updateAt
  }
}
`
export const ADD_ORGANIZATION = gql`
mutation CreateOrganization($data: OrganizationsCreateInput!) {
  createOrganization(data: $data) {
    id
    name
    email
    role
    address
    contact
    secretKeyId
    userGroup {
      id
      userGroupRole
      userName
      tabsPermission
      createdAt
      updateAt
    }
  }
}
`

export const ADD_MY_COURSES = gql`
mutation Mutation($data: MyCourseCreateInput!) {
  createMyCourse(data: $data) {
    id
    coursesId
    studentId
    createdAt
    updateAt
    courseApproval
    whyReject
    feeStatus
    courseBatchesId
  }
}
`

export const ADD_ATTANDANCE = gql`
mutation CreateAttendence($data: AttendenceCreateInput!) {
  createAttendence(data: $data) {
    attendence
    id
    date
    userId
  }
}
`

export const ADD_QUIZ = gql`
mutation CreateCourseQuiz($data: CourseQuizCreateInput!) {
  createCourseQuiz(data: $data) {
    id
    courseBatchesId
    coursesId
    createdAt
    updateAt
  }
}
`

export const ADD_ASSIGNMENT = gql`
mutation CreateCourseAssignment($data: CourseAssignmentCreateInput!) {
  createCourseAssignment(data: $data) {
    id
    name
    courseBatchesId
    coursesId
    createdAt
    updateAt
  }
}
`

export const ADD_LECTURES = gql`
mutation CreateLectures($data: LecturesCreateInput!) {
  createLectures(data: $data) {
    id
    lectureTitle
    lectureVideo
    coursesId
    createdAt
    updateAt
  }
}
`
export const ADD_COURSE_BATCH = gql`
mutation CreateCourseBatches($data: CourseBatchesCreateInput!) {
  createCourseBatches(data: $data) {
    id
    name
    coursesId
    courseName
    createdAt
    updateAt
  }
}
`

//SINGLE DELETE MUTATIONS





// export const DELETE_SINGLE_COURSE = gql`
// mutation DeleteCourses($where: CoursesWhereUniqueInput!) {
//   deleteCourses(where: $where) {
//     id
//     courseDesc
//     courseName
//     courseIntro
//     instructorId
//     courseCategoryId
//     organizationId
//     coursePrice
//     whatYouLearn
//     courseStatus
//     createdAt
//     updateAt
//   }
// }
// `

// export const DELETE_ENROLMMENT_APPROVAL = gql`
// mutation DeleteEnrollmentApproval($where: EnrollmentApprovalWhereUniqueInput!) {
//   deleteEnrollmentApproval(where: $where) {
//     id
//     userId
//     coursesId
//     status
//     paymentMethod
//     amount
//     transactionId
//   }
// }
// `

// export const DELETE_SPEAKER = gql`
// mutation DeleteSpeaker($where: SpeakerWhereUniqueInput!) {
//   deleteSpeaker(where: $where) {
//     id
//     speakerName
//     spkearDesc
//     spekaerImage
//     createdAt
//     updateAt
//   }
// }
// `
// export const DELETE_CONTACT = gql`
// mutation DeleteMutation($where: ContactUsWhereUniqueInput!) {
//   deleteContactUs(where: $where) {
//     name
//   }
// }
// `

// export const DELETE_SINGLE_SUCCESS_STORY = gql`
// mutation DeleteSuccessStories($where: SuccessStoriesWhereUniqueInput!) {
//   deleteSuccessStories(where: $where) {
//     id
//     freelancingProfileUrl
//     paymentProof
//     description
//     totalEarnedAmount
//     status
//     city
//     whyReject
//   }
// }
// `

// export const DELETE_SINGLE_EVENT = gql`
// mutation DeleteEvents($where: EventsWhereUniqueInput!) {
//   deleteEvents(where: $where) {
//     id
//     eventName
//     eventImage
//     eventDesc
//     eventDate
//     speakerId
//     eventStatus
//   }
// }
// `

// export const DELETE_SINGLE_FAQ = gql`
// mutation DeleteFaq($where: FaqWhereUniqueInput!) {
//   deleteFaq(where: $where) {
//     id
//     faqQuestion
//     faqAnswer
//     courseId
//     createdAt
//     updateAt
//     course {
//       courseName
//       id
//       courseDesc
//     }
//   }
// }
// `
// export const DELETE_USER = gql`
// mutation DeleteUser($where: UserWhereUniqueInput!) {
//   deleteUser(where: $where) {
//     id
//     name
//     email
//     cnic
//     address
//     contact
//     role
//   }
// }
// `

// export const DELETE_ATTANDANCE = gql`
// mutation Mutation($where: AttendenceWhereUniqueInput!) {
//   deleteAttendence(where: $where) {
//     id
//   }
// }
// `
// export const DELETE_QUIZ = gql`
// mutation DeleteCourseQuiz($where: CourseQuizWhereUniqueInput!) {
//   deleteCourseQuiz(where: $where) {
//     id
//     courseBatchesId
//     coursesId
//     createdAt
//     updateAt
//   }
// }
// `
// export const DELETE_ASSIGNMENT = gql`
// mutation DeleteCourseAssignment($where: CourseAssignmentWhereUniqueInput!) {
//   deleteCourseAssignment(where: $where) {
//     id
//     name
//     courseBatchesId
//     coursesId
//     createdAt
//     updateAt
//   }
// }`

// export const DELETE_LECTURE = gql`
// mutation DeleteLectures($where: LecturesWhereUniqueInput!) {
//   deleteLectures(where: $where) {
//     id
//     lectureTitle
//     lectureVideo
//     coursesId
//     createdAt
//     updateAt
//   }
// }
// `
// export const DELETE_COURSE_BATCH = gql`
// mutation DeleteCourseBatches($where: CourseBatchesWhereUniqueInput!) {
//   deleteCourseBatches(where: $where) {
//     id
//     name
//     coursesId
//     courseName
//     createdAt
//     updateAt
//   }
// }
// `

// export const DELETE_MY_COURSE = gql`
// mutation DeleteMyCourse($where: MyCourseWhereUniqueInput!) {
//   deleteMyCourse(where: $where) {
//     id
//     coursesId
//     studentId
//     createdAt
//     updateAt
//     courseApproval
//     whyReject
//     feeStatus
//     courseBatchesId
//   }
// }
// `

//UPDATE SINGLE MUTATIONS

export const UPDATE_SINGLE_SUCCESS = gql`
mutation UpdateSuccessStories($where: SuccessStoriesWhereUniqueInput!, $data: SuccessStoriesUpdateInput!) {
  updateSuccessStories(where: $where, data: $data) {
    id
  }
} `

export const UPDATE_SINGLE_COURSE_CATEGORY = gql`
mutation UpdateCategory($data: CategoryUpdateInput!, $where: CategoryWhereUniqueInput!) {
  updateCategory(data: $data, where: $where) {
    id
    categoryName
    imageUrl
    createdAt
    updateAt
  }
}
`

export const UPDATE_SINGLE_COURSE = gql`
mutation UpdateCourses($data: CoursesUpdateInput!, $where: CoursesWhereUniqueInput!) {
  updateCourses(data: $data, where: $where) {
    id
    courseName
    courseDesc
    courseIntro
    instructorId
    courseCategoryId
    organizationId
    whatYouLearn
    coursePrice
    courseStatus
    createdAt
    updateAt
  }
}
`
export const UPDATE_SPEAKER = gql`
mutation UpdateSpeaker($data: SpeakerUpdateInput!, $where: SpeakerWhereUniqueInput!) {
  updateSpeaker(data: $data, where: $where) {
    id
    speakerName
    spkearDesc
    spekaerImage
    createdAt
    updateAt
  }
}
`
export const UPDATE_SINGLE_FAQ = gql`
mutation UpdateFaq($data: FaqUpdateInput!, $where: FaqWhereUniqueInput!) {
  updateFaq(data: $data, where: $where) {
    id
    faqQuestion
    faqAnswer
    courseId
    createdAt
    updateAt
    course {
      id
      courseName
      courseIntro
      courseDesc
    }
  }
}
`





export const UPDATE_SINGLE_ENROLLMENT = gql`
mutation UpdateEnrollmentApproval($data: EnrollmentApprovalUpdateInput!, $where: EnrollmentApprovalWhereUniqueInput!) {
  updateEnrollmentApproval(data: $data, where: $where) {
    id
    userId
    coursesId
    status
    paymentMethod
    amount
    transactionId
  }
} `

export const UPDATE_SINGLE_CONTACT = gql`
mutation UpdateContactUs($data: ContactUsUpdateInput!, $where: ContactUsWhereUniqueInput!) {
  updateContactUs(data: $data, where: $where) {
    name
    id
    subject
    message
    reply
    status
  }
}
`

export const UPDATE_SINGLE_EVENT = gql`
mutation UpdateEvents($data: EventsUpdateInput!, $where: EventsWhereUniqueInput!) {
  updateEvents(data: $data, where: $where) {
    id
    eventName
    eventImage
    eventDesc
    eventDate
    eventStatus
    speakerId
  }
} `

export const UPDATE_USER_GROUP = gql`
mutation UpdateUserGroup($data: UserGroupUpdateInput!, $where: UserGroupWhereUniqueInput!) {
  updateUserGroup(data: $data, where: $where) {
    id
    userName
    userGroupRole
    tabsPermission
    createdAt
    updateAt
  }
}
`
export const UPDATE_USER = gql`
mutation UpdateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateUser(data: $data, where: $where) {
    id
    userGroup {
      userGroupRole
      userName
      id
      tabsPermission
      updateAt
    createdAt
    }
    name
    email
    cnic
    address
    contact
    status
    permission
    token
  }
}
`

export const UPDATE_ATTANDANCE = gql`
mutation UpdateAttendence($data: AttendenceUpdateInput!, $where: AttendenceWhereUniqueInput!) {
  updateAttendence(data: $data, where: $where) {
    id
    attendence
    date
    userId
  }
}
`


export const UPDATE_QUIZ = gql`
mutation UpdateCourseQuiz($data: CourseQuizUpdateInput!, $where: CourseQuizWhereUniqueInput!) {
  updateCourseQuiz(data: $data, where: $where) {
    id
    courseBatchesId
    coursesId
    createdAt
    updateAt
  }
}
`


export const UPDATE_ASSIGNMENT = gql`
mutation UpdateCourseAssignment($data: CourseAssignmentUpdateInput!, $where: CourseAssignmentWhereUniqueInput!) {
  updateCourseAssignment(data: $data, where: $where) {
    id
    name
    courseBatchesId
    coursesId
    createdAt
    updateAt
  }
}
`


export const UPDATE_LECTURES = gql`
mutation UpdateLectures($data: LecturesUpdateInput!, $where: LecturesWhereUniqueInput!) {
  updateLectures(data: $data, where: $where) {
    id
    lectureTitle
    lectureVideo
    coursesId
    createdAt
    updateAt
  }
}
`

export const UPDATE_COURSE_BATCH = gql`
mutation UpdateCourseBatches($data: CourseBatchesUpdateInput!, $where: CourseBatchesWhereUniqueInput!) {
  updateCourseBatches(data: $data, where: $where) {
    id
    name
    coursesId
    courseName
    createdAt
    updateAt
  }
}
`

export const UPDATE_MY_COURSE = gql`
mutation UpdateMyCourse($data: MyCourseUpdateInput!, $where: MyCourseWhereUniqueInput!) {
  updateMyCourse(data: $data, where: $where) {
    id
    coursesId
    studentId
    createdAt
    updateAt
    courseApproval
    whyReject
    feeStatus
    courseBatchesId
  }
}`
export const ACTIVE_USER = gql`
mutation GetActiveUser($token: String!) {
  getActiveUser(token: $token) {
    id
    name
    email
    role
    address
    contact
    secretKeyId
    token
    users {
      id
      name
      email
      cnic
      address
      contact
      permission
      emailApproval
      successStoriesId
      token
      createdAt
      updateAt
      organizationsId
      status
      userGroupId
      userGroup {
        id
        userName
        userGroupRole
        tabsPermission
        createdAt
        updateAt
        organizationsId
      }
    }
    userGroup {
      id
      userName
      userGroupRole
      tabsPermission
      createdAt
      organizationsId
      updateAt
    }
  }
}
`
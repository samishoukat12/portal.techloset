import { gql } from "@apollo/client"

export const GET_ENROLLMENT = gql`
  query EnrollmentApprovals {
    enrollmentApprovals {
      id
      userId
      coursesId
      status
      amount
      transactionId
      paymentMethod
    }
  }
`
export const GET_EVENTS = gql`
  query FindManyEvents {
    findManyEvents {
      id
      eventName
      eventDesc
      eventImage
      eventDate
      speakerId
      eventStatus
    }
  }
`

export const GET_FAQS = gql`
  query Faqs {
    faqs {
      id
      faqQuestion
      faqAnswer
      courseId
      createdAt
      updateAt
    }
  }
`

export const GET_SUCCESS_STORIES = gql`
  query FindManySuccessStories {
    findManySuccessStories {
      freelancingProfileUrl
      id
      paymentProof
      description
      status
      totalEarnedAmount
      city
      whyReject
    }
  }
`
export const GET_ALL_ORGANIZATION = gql`
  query {
    findManyOrganizations {
      id
      name
      email
      role
      address
      contact
    }
  }
`
export const GET_EDIT_DATA = gql`
  query getEditData {
    editData @client
  }
`

export const GET_USERS = gql`
  query Query {
    users {
      id
      name
      email
      cnic
      address
      contact
      permission
      myCourse {
        coursesId
      }
      userGroup {
        userGroupRole
        id
        userName
        tabsPermission
      }
    }
  }
`

export const GET_USER_GROUP = gql`
  query UserGroups {
    userGroups {
      id
      userName
      userGroupRole
      tabsPermission
      createdAt
      updateAt
    }
  }
`

export const GET_MESSAGE = gql`
  query Query {
    contactuses {
      id
      name
      subject
      message
      status
      reply
    }
  }
`

export const CASHED_COURSES = gql`
  query cashedCourses {
    courses @client
  }
`

export const GET_COURSES = gql`
  query Query {
    findManyCourses {
      id
      courseName
      courseDesc
      courseIntro
      instructorId
      courseCategoryId
      organizationId
      coursePrice
      whatYouLearn
      courseStatus
      createdAt
      updateAt
    }
  }
`

export const GET_CONTACT_US = gql`
  query Query {
    contactuses {
      name
      subject
      message
      id
      status
      reply
    }
  }
`

export const GET_COURSE_CATEGORY = gql`
  query Categories {
    categories {
      id
      categoryName
      imageUrl
      createdAt
      updateAt
    }
  }
`

export const GET_MY_COURSES = gql`
  query MyCourses {
    myCourses {
      coursesId
      id
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

export const GET_ATTANDANCE = gql`
  query Query {
    attendences {
      id
      attendence
      date
      userId
    }
  }
`

export const GET_QUIZ = gql`
  query Query {
    courseQuizs {
      id
      courseBatchesId
      createdAt
      coursesId
      updateAt
    }
  }
`

export const GET_ASSIGNMENT = gql`
  query Query {
    courseAssignments {
      id
      name
      courseBatchesId
      coursesId
      createdAt
      updateAt
    }
  }
`
export const GET_LECTURES = gql`
  query FindManyLectures {
    findManyLectures {
      id
      lectureTitle
      lectureVideo
      coursesId
      createdAt
      updateAt
    }
  }
`

export const GET_COURSE_BATCH = gql`
  query FindManyCourseBatches {
    findManyCourseBatches {
      id
      name
      coursesId
      courseName
      createdAt
      updateAt
    }
  }
`

export const GET_SPEAKERS = gql`
  query FindManyCourseBatches {
    speakers {
      id
      speakerName
      spkearDesc
      spekaerImage
      createdAt
      updateAt
    }
  }
`

import React, { useEffect, useState } from "react";
import { DS } from "./DashboardStyle";
import Card from './card/Card';
import UseDashboard from "./UseDashboard";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [{
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
    state,
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
    USER_GROUP_LOADING,
  }] = UseDashboard();


  // const userRole = state?.user.userGroup.map((items) => {
  //     return items.userGroupRole
  // })





  return (
    <>
      <DS.MainPageContainer>
        <DS.CardsRow>
          <DS.CardContainer>
            <Link to='/allOrganization' className="link">
              <Card
                value={all_org}
                // USERS_LOADING={state?.usersObj.ORG_DATA_LOGIN}
                heading='ORGANIZATION'
                icon={<DS.PeopleOutline />}
              />
            </Link>
          </DS.CardContainer>
          <DS.CardContainer>
            <Link to='/staff' className="link">
              <Card
                value={AdminLength}
                // USERS_LOADING={state?.usersObj.USER_LOADING}
                heading='ADMINS'
                icon={<DS.PersonIcon />}
              />
            </Link>
          </DS.CardContainer>
          <DS.CardContainer>
            <Link to='/staff' className="link">
              <Card
                value={TeacherLength}
                // USERS_LOADING={state?.usersObj.USER_LOADING}
                heading='TEACHERS'
                icon={<DS.RecordVoiceOver />}
              />
            </Link>
          </DS.CardContainer>
        </DS.CardsRow>
        <DS.CardsRow>
          <DS.CardContainer>
            <Link to='/students' className="link">
              <Card
                value={studentLength}
                // USERS_LOADING={state?.usersObj.USER_LOADING}
                heading='STUDENTS'
                icon={<DS.PeopleOutline />}
              />
            </Link>
          </DS.CardContainer>
          <DS.CardContainer>
            <Link to='/courses' className="link">
              <Card
                value={courseLength ? courseLength : 0}
                // COURSE_LOADING={COURSE_LOADING}
                heading='COURSES'
                icon={<DS.Subscriptions />}
              />
            </Link>
          </DS.CardContainer>
          <DS.CardContainer>
            <Link to='/events' className="link">
              <Card
                value={eventLength}
                // EVENTS_LOADING={EVENTS_LOADING}
                heading='EVENTS'
                icon={<DS.EventAvailableIcon />}
              />
            </Link>
          </DS.CardContainer>
        </DS.CardsRow>
        {/* {
                    userRole === "ORGANIZATIONKEY" || "OWNER" ?
                        <DS.CardsRow>
                            <DS.CardContainer>
                                <Link to='/courseBatch' className="link">
                                    <Card
                                        value={courseBatchlength ? courseBatchlength : 0}
                                        // BATCH_LOADING={BATCH_LOADING}
                                        heading='COURSE BATCH'
                                        icon={<DS.Subscriptions />}
                                    />
                                </Link>
                            </DS.CardContainer>
                            <DS.CardContainer>
                                <Link to='/approve-enrollment' className="link">
                                    <Card
                                        value={enrollement ? enrollement : 0}
                                        // ENROLMENT_LOADING={ENROLMENT_LOADING}
                                        heading='ENROLLMENT APPROVAL'
                                        icon={<DS.CheckCircleIcon />}
                                    />
                                </Link>
                            </DS.CardContainer>
                            <DS.CardContainer>
                                <Link to='/successStory' className="link">
                                    <Card
                                        value={successLength ? successLength : 0}
                                        // SUCCESS_LOADING={SUCCESS_LOADING}
                                        heading='SUCCESS STORIES'
                                        icon={<DS.LocalActivity />}
                                    />
                                </Link>
                            </DS.CardContainer>
                            <DS.CardContainer>
                                <Link to='/speakers' className="link">
                                    <Card
                                        value={speakerListLength ? speakerListLength : 0}
                                        // SPEAKERS_LOADING={SPEAKERS_LOADING}
                                        heading='SPEAKERS'
                                        icon={<DS.SurroundSoundIcon />}
                                    />
                                </Link>
                            </DS.CardContainer>
                        </DS.CardsRow>
                        :
                        ''
                } */}
      </DS.MainPageContainer>
    </>
  )
}




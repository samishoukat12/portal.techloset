import React, { useContext } from 'react';
import Sidebar from '../commonComponents/sidebar/Sidebar';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Login from '../modules/auth/login/Login';
import ForgotPassword from '../modules/auth/forgotPassword/ForgotPassword';
import Dashboard from '../modules/dashboard/Dashboard';
import AllStudents from '../modules/adminPortal/allStudents/AllStudents';
import SuccessStory from '../modules/successStory/SuccessStory';
import Courses from '../modules/courses/Course';
import EnrollmentApproval from '../modules/adminPortal/enrollmentApproval/EnrollmentApproval';
import Events from '../modules/adminPortal/events/Events';
import FAQS from '../modules/adminPortal/faqs/FAQS';
import ContactUs from '../modules/adminPortal/contactUs/ContactUs';
import Profile from '../modules/profile/Profile';
import ChangePassword from '../modules/profile/changePassword/ChangePassword';
import ProfileData from '../modules/profile/profileData/ProfileData';
import EditProfile from '../modules/profile/editProfile/EditProfile';
import AllStaff from '../modules/adminPortal/allStaff/AllStaff';
import { PublicRouting } from './PublicRouting';
import { PrivateRouting } from './PrivateRouting';
import PageNotFound from '../commonComponents/pageNotFound/PageNotFound';
import MyCourse from '../modules/studentPortal/myCourses/MyCourses';
import Assignment from '../modules/studentPortal/assignment/Assignment';
import Quiz from '../modules/studentPortal/quiz/Quiz';
import MyAttandance from '../modules/studentPortal/attandance/Attandance';
import StudentList from '../modules/teacherPortal/studentList/StudentList'
import CourseAssigned from '../modules/teacherPortal/courseAssigned/CourseAssigned'
import Lecture from '../modules/teacherPortal/lecture/Lecture'
import FilesOrAssignment from '../modules/teacherPortal/filesOrAssignment/FilesOrAssignment'
import CourseBatch from '../modules/adminPortal/courseBatch/CourseBatch';
import Speakers from '../modules/speakers/Speakers';
import UserGroupTable from '../modules/settings/tabsPermission/UserGroupTable';
import ApiPermissions from '../modules/settings/apiPermissions/ApiPermissions';
import UserGroup from '../modules/settings/userGroup/UserGroup';
import CreateOrganization from '../modules/settings/createOrganization/CreateOrganization';
import CourseCategory from '../modules/adminPortal/courseCategory/CourseCategory';
import ViewAllUserGroup from '../modules/settings/userGroup/ViewAllUserGroup';
import Footer from '../commonComponents/footer/Footer';
import CourseDetail from '../modules/courseDetail/CourseDetail';
import { checkAuth } from '../lib/reactivities/reactiveVarables';
import { useReactiveVar } from '@apollo/client';

export default function Navigation() {
    const useCheckAuth = useReactiveVar(checkAuth)
    let location = useLocation();
    let navigate = useNavigate()

    React.useEffect(() => {
        if (!useCheckAuth) {
            navigate(location.pathname)
        }
    }, [])
    return (
        <>

            <Routes>

                <Route
                    path='/login'
                    element={
                        <PublicRouting isAllowed={useCheckAuth}>
                            <Login />
                        </PublicRouting>
                    }
                />
                <Route
                    path='/forgotPassword'
                    element={
                        <PublicRouting isAllowed={useCheckAuth}>
                            <ForgotPassword />
                        </PublicRouting>
                    }
                />
                <Route
                    path='/:pageName'
                    element={<PageNotFound />
                    }
                />
                <Route
                    path='/'
                    element={
                        <PrivateRouting isAllowed={useCheckAuth}>
                            <Sidebar />
                        </PrivateRouting>
                    }>
                    <Route
                        path='/'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <Dashboard />
                            </PrivateRouting>
                        }
                    />
                    <Route
                        path='/contact'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <ContactUs />
                            </PrivateRouting>
                        }
                    />
                    <Route
                        path='/staff'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <AllStaff />
                            </PrivateRouting>
                        }
                    />
                    <Route
                        path='/students'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <AllStudents />
                            </PrivateRouting>
                        }
                    />
                    <Route
                        path='/successStories'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <SuccessStory />
                            </PrivateRouting>
                        }
                    />
                    <Route
                        path='/courses'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <Courses />
                            </PrivateRouting>
                        }
                    />
                    <Route path='/courseCategory'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <CourseCategory />
                            </PrivateRouting>}
                    />
                    <Route path='/lectures'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <Lecture />
                            </PrivateRouting>}
                    />
                    <Route
                        path='/enrollmentApproval'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <EnrollmentApproval />
                            </PrivateRouting>
                        }
                    />
                    <Route
                        path='/events'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <Events />
                            </PrivateRouting>
                        }
                    />
                    <Route
                        path='/faqs'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <FAQS />
                            </PrivateRouting>
                        }
                    />
                    <Route
                        path='/profile'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <Profile />
                            </PrivateRouting>
                        }
                    >
                    </Route>



                    {/* students routes */}
                    <Route path='/myCourses'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <MyCourse />
                            </PrivateRouting>}
                    />
                    <Route path='/assignments'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <Assignment />
                            </PrivateRouting>}
                    />
                    <Route path='/quiz'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <Quiz />
                            </PrivateRouting>}
                    />
                    <Route path='/attendance'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <MyAttandance />
                            </PrivateRouting>}
                    />



                    {/*Teacher routes*/}
                    <Route path='/courseAssigned'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <CourseAssigned />
                            </PrivateRouting>}
                    />
                    <Route path='/courseCategory'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <CourseCategory />
                            </PrivateRouting>}
                    />
                    <Route path='/lectures'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <Lecture />
                            </PrivateRouting>}
                    />
                    <Route path='/fileOrAssignment'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <FilesOrAssignment />
                            </PrivateRouting>}
                    />
                    <Route path='/courseBatch'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <CourseBatch />
                            </PrivateRouting>}
                    />
                    <Route path='/speakers'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <Speakers />
                            </PrivateRouting>}
                    />
                    {/* <Route path='/user-groups'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <UserGroupTable />
                            </PrivateRouting>}
                    /> */}
                    <Route path='/user-groups'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <UserGroupTable />
                            </PrivateRouting>}
                    />
                    <Route path='/api-permissions'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <ApiPermissions />
                            </PrivateRouting>}
                    />
                    <Route path='/allOrganization'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <CreateOrganization />
                            </PrivateRouting>}
                    />
                    <Route path='/course-detail/:courseId'
                        element={
                            <PrivateRouting isAllowed={useCheckAuth}>
                                <CourseDetail />
                            </PrivateRouting>}
                    />
                </Route>

            </Routes>
            {/* <Footer/> */}
        </>
    );
}

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Success from "../pages/Success";
import Himel from "../pages/Himel";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import Blog from "../pages/Blog";
import Profile from "../section/dashboard/profile";
import AdditionalInfo from "../section/dashboard/AddtionalInfo";
import Address from "../section/dashboard/Address";
import Education from "../section/dashboard/Education";
import ImportantLinks from "../section/dashboard/ImportantLinks";
import SkillSet from "../section/dashboard/SkillSet";
import Level2Goal from "../section/dashboard/Level2Goal";
import Certification from "../section/dashboard/Certification";
import CreateUser from "../section/dashboard/superAdmin/CreateUser";
import Courses from "../section/dashboard/superAdmin/Courses";
import Admins from "../section/dashboard/superAdmin/Admins";
import Students from "../section/dashboard/superAdmin/Students";
import CreateInstructor from "../section/dashboard/admin/createInstructor";
import OrderHistory from "../section/dashboard/OrderHistory";
import CourseRequest from "../section/dashboard/CourseRequest";
import JobExperience from "../section/dashboard/JobExperience";
import JobProfile from "../section/dashboard/JobProfile";
import GotHired from "../section/dashboard/GotHired";
import Samir from "../pages/Samir";
import AllPost from "../section/helpDesk/components/AllPost";
import Roadmap from "../section/helpDesk/components/Roadmap";
import ReleaseLog from "../section/helpDesk/components/ReleaseLog";
import FeatureRequest from "../section/helpDesk/components/FeatureRequest";

import MyClass from "../pages/MyClass";
import MyClassDetails from "../pages/MyClassDetails";
import CourseDetails from "../pages/CourseDetails";
import Module from "../section/dashboard/Module";
import Course1 from "../section/dashboard/Course";
import Instructors from "../section/dashboard/superAdmin/Instructors";
import UserProfile from "../section/dashboard/userProfile";
import AdminProfile from "../section/dashboard/AdminProfile";
import InstructorProfile from "../section/dashboard/InstructorProfile";
import StudentProfile from "../section/dashboard/StudentProfile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/class",
        element: <MyClass />,
      },
      {
        path: "/class/:id",
        element: <MyClassDetails />,
      },
      {
        path: "/course",
        element: <CourseDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/dashboard",
        element: <Samir />,
      },

      {
        path: "/himel",
        element: <Himel />,
        children: [
          {
            path: "all-post",
            element: <AllPost />,
          },
          {
            path: "roadmap",
            element: <Roadmap />,
          },
          {
            path: "release-log",
            element: <ReleaseLog />,
          },
          {
            path: "feature-request",
            element: <FeatureRequest />,
          },
        ],
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      { path: "/course-modules", element: <Module /> },
      {
        path: "/dashboard",
        element: <Samir />,
        children: [
          {
            path: 'course',
            element: <Course1/>,
          },
          { path: "profile", element: <Profile /> },
          { path: "admin-profile/:id", element: <AdminProfile /> },
          { path: "instructor-profile/:id", element: <InstructorProfile /> },
          { path: "student-profile/:id", element: <StudentProfile /> },
          { path: "additional-info", element: <AdditionalInfo /> },
          { path: "address", element: <Address /> },
          { path: "education", element: <Education /> },
          { path: "important-links", element: <ImportantLinks /> },
          { path: "skill-set", element: <SkillSet /> },
          { path: "level-2-goal", element: <Level2Goal /> },
          { path: "job-profile", element: <JobProfile /> },
          { path: "job-experience", element: <JobExperience /> },
          { path: "got-hired", element: <GotHired /> },
          { path: "course-request", element: <CourseRequest /> },
          { path: "order-history", element: <OrderHistory /> },
          { path: "certification", element: <Certification /> },
          { path: "create-user", element: <CreateUser /> },
          { path: "courses", element: <Courses /> },
          { path: "admins", element: <Admins /> },
          { path: "instructors", element: <Instructors /> },
          { path: "students", element: <Students /> },
          { path: "create-instructor", element: <CreateInstructor /> },
        ],
      },
    ],
  },
]);

export default routes;

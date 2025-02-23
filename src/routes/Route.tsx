import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Success from "../pages/Success";
import Eitty from "../pages/Eitty";
import Mehedi from "../pages/Mehedi";
import Himel from "../pages/Himel";
import ClassDetails from "../pages/ClassDetails";
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
import OrderHistory from "../section/dashboard/OrderHistory";
import CourseRequest from "../section/dashboard/CourseRequest";
import JobExperience from "../section/dashboard/JobExperience";
import JobProfile from "../section/dashboard/JobProfile";
import GotHired from "../section/dashboard/GotHired";
import Samir from "../pages/Samir";
import BlogDetails from "../pages/BlogDetails";

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
        path: "/products",
        element: <Products />,
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
        path: "/blog-details",
        element: <BlogDetails />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/eitty",
        element: <Eitty />,
      },
      {
        path: "/mehedi",
        element: <Mehedi />,
      },
      {
        path: "/mehedi/:id",
        element: <ClassDetails />,
      },
      {
        path: "/himel",
        element: <Himel />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/dashboard",
        element: <Samir />,
        children: [
          { path: "profile", element: <Profile /> },
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
        ],
      },
    ],
  },
]);

export default routes;

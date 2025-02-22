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
    ],
  },
]);

export default routes;

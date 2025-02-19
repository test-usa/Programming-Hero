import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Success from "../pages/Success";
import Eitty from "../pages/Eitty";
import Mehedi from "../pages/Mehedi";
import Himel from "../pages/Himel";

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
        path: "/himel",
        element: <Himel />,
      },
  
    ],
  },
]);

export default routes;

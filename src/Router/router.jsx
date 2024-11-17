import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Main/Layout";
import Brands from "../Pages/Brands";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Coupon from "../Pages/Coupon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/fakedata.json"),
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
        loader: () => fetch("/fakedata.json"),
      },
      {
        path: "/brands/:id",
        element: <Coupon></Coupon>,
        loader: () => fetch("/fakedata.json"),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;

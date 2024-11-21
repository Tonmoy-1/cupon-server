import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Main/Layout";
import Brands from "../Pages/Brands";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Coupon from "../Pages/Coupon";
import MyProfile from "../Pages/MyProfile";
import UpdateProfile from "../Pages/UpdateProfile";
import PrivetRouts from "./PrivetRouts";
import ForgetPassWord from "../Pages/ForgetPassWord";
import ErrorPage from "../Pages/ErrorPage";
import About from "../Components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <PrivetRouts>
            <Coupon></Coupon>
          </PrivetRouts>
        ),
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
      {
        path: "/forgetpass",
        element: <ForgetPassWord></ForgetPassWord>,
      },
      {
        path: "/my-profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/about-dev",
        element: <About></About>,
      },
    ],
  },
]);

export default router;

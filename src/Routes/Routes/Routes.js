import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import Main from "../../layouts/Main/Main";
import AddAProduct from "../../Pages/Dashboard/AddAProduct/AddAProduct";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManageProducts from "../../Pages/Dashboard/ManageProducts/ManageProducts";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import AllMobiles from "../../Pages/Home/AllMobiles/AllMobiles";
import HomePage from "../../Pages/Home/HomePage/HomePage";
import DisplayMobiles from "../../Pages/Home/MobileCategories/DisplayMobiles/DisplayMobiles";
import ShowMobileCategories from "../../Pages/Home/MobileCategories/ShowMobileCategories/ShowMobileCategories";
import Login from "../../Pages/Login/Login";
import Blogs from "../../Pages/Shared/Blogs/Blogs";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <DisplayMobiles></DisplayMobiles>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(
            `https://used-mobile-shop-server.vercel.app/category/${params.id}`
          );
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/allmobiles",
        element: <AllMobiles></AllMobiles>,
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <ErrorPage></ErrorPage>,
  // },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addaproduct",
        element: (
          <AdminRoute>
            <AddAProduct></AddAProduct>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageproducts",
        element: (
          <AdminRoute>
            <ManageProducts></ManageProducts>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://used-mobile-shop-server.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
]);

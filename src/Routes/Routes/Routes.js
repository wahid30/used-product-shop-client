import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import HomePage from "../../Pages/Home/HomePage/HomePage";
import Iphones from "../../Pages/Home/MobileCategories/ShowMobileCategories/Iphones/Iphones";
import OnePlus from "../../Pages/Home/MobileCategories/ShowMobileCategories/OnePlus/OnePlus";
import Samsung from "../../Pages/Home/MobileCategories/ShowMobileCategories/Samsung/Samsung";
import ShowMobileCategories from "../../Pages/Home/MobileCategories/ShowMobileCategories/ShowMobileCategories";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/allmobiles",
        element: <ShowMobileCategories></ShowMobileCategories>,
      },
      {
        path: "/iphone",
        element: <Iphones></Iphones>,
      },
      {
        path: "/samsung",
        element: <Samsung></Samsung>,
      },
      {
        path: "/onePlus",
        element: <OnePlus></OnePlus>,
      },
    ],
  },
]);

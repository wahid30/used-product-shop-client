import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import HomePage from "../../Pages/Home/HomePage/HomePage";
import DisplayMobiles from "../../Pages/Home/MobileCategories/DisplayMobiles/DisplayMobiles";
import ShowMobileCategories from "../../Pages/Home/MobileCategories/ShowMobileCategories/ShowMobileCategories";
import Blogs from "../../Pages/Shared/Blogs/Blogs";

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
        path: "/category/:id",
        element: <DisplayMobiles></DisplayMobiles>,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/category/${params.id}`);
        },
      },
      {
        path: "/allmobiles",
        element: <ShowMobileCategories></ShowMobileCategories>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

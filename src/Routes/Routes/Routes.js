import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import HomePage from "../../Pages/Home/HomePage/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
    ],
  },
]);

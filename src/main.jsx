import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/Guest.jsx";
import HomePage from "./Pages/HomePage.jsx";
import ViewPage from "./Pages/ViewPage.jsx";
import AddBlog from "./Pages/AddBlogPage.jsx";
import "./firebase/index.firebase.credintials.js";
import EditPage from "./Pages/EditPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/add_post",
        element: <AddBlog />,
      },
      {
        path: "/view_post/:id",
        element: <ViewPage />,
      },
      {
        path: "/edit/:id",
        element: <EditPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

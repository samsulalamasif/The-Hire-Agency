import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import ErrorPage from "./components/Error/Error";
import Statistics from "./components/Statistics/Statistics";
import AppliedJobs from "./components/Applied Jobs/AppliedJobs";
import Blog from "./components/Blog/Blog";
import JobDetails from "./components/JobDetails/JobDetails";
import ErrorHandel from "./components/Error/ErrorHandel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorHandel></ErrorHandel>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/Jobsfeatured.json"),
      },
      {
        path: "details/:JobId",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch("/Jobsfeatured.json"),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("/Jobsfeatured.json"),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import Html from "./pages/html";
import Css from "./pages/css";
import JavaScript from "./pages/javascript";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Sorry ..... </h1>,
  },
  {
    path: "/Html",
    element: <Html />,
  },
  {
    path: "/Css",
    element: <Css />,
  },
  {
    path: "/JavaScript",
    element: <JavaScript />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

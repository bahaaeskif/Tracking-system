import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginRoute, sharedLayoutRoute } from "./Routes";

const router = createBrowserRouter([sharedLayoutRoute, LoginRoute]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

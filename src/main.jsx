import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myRouter from "./Router/Router";
import AuthProvider from "./Auth/AuthProvider";





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myRouter}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);

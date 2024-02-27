import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./AppRoutes";

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={AppRoutes} />
  </React.StrictMode>,
  document.getElementById("root")
);

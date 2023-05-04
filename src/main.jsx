import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import { router } from "./router/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FluentProvider theme={teamsLightTheme}>
      <RouterProvider router={router} />
    </FluentProvider>
  </React.StrictMode>
);

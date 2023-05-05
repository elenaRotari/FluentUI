import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import { router } from "./router/router.jsx";
import MyContext from "./MyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FluentProvider theme={teamsLightTheme}>
      <MyContext>
        <RouterProvider router={router} />
      </MyContext>
    </FluentProvider>
  </React.StrictMode>
);

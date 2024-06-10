import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Platform from "./Components/Platform/Platform";
import {
  BrowserRouter,
  Routes,
  Router,
  Switch,
  Route,
  HashRouter,
  createHashRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { useMediaQuery } from "react-responsive";

import "./App.css";

// const router = createBrowserRouter([
//   {
//     path: "/*",
//     element: <App />,
//   },
// ]);

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

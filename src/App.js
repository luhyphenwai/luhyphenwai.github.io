import React from "react";
import ReactDOM from "react-dom";
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
  RouterProvider,
} from "react-router-dom";

import { useMediaQuery } from "react-responsive";

import "./App.css";

// const router = createHashRouter([
//   {
//     path: "/*",
//     element: <App />,
//   },
// ]);

export default function App() {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&family=Space+Mono&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
      </style>
      {/* <Intro /> */}

      <Routes>
        <Route path="/" element={<Platform />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="*" element={<Platform />} />
      </Routes>
    </div>
  );
}

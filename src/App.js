import React from "react";
import ReactDOM from "react-dom";
import Home from "./Components/Home/Home";
import CaseComp from "./Components/CaseComp/CaseComp"
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

export default function App() {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&family=Space+Mono&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
      </style>

      <Routes>
        <Route path="/" element={<CaseComp />} />
        <Route path="/casecomp" element={<CaseComp />} />
        <Route path="*" element={<CaseComp />} />
      </Routes>
    </div>
  );
}

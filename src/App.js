// import "./App.scss";

// Components
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Platform from "./Components/Platform/Platform";
import { BrowserRouter, Routes, Router, Switch, Route } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

import "./App.css";

function App() {
  // Set background color

  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&family=Space+Mono&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
      </style>
      {/* <Intro /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Platform" element={<Platform />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

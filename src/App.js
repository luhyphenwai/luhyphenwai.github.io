// import "./App.scss";

// Components
import HomeDesktop from "./Components/Home/HomeDesktop";
import Projects from "./Components/Projects/Projects";
import { BrowserRouter, Routes, Router, Switch, Route } from "react-router-dom";

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
          <Route index element={<HomeDesktop />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

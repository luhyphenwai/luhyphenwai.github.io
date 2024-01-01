// import "./App.scss";

// Components
import Home from "./Components/Home/Home";
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
      </style>
      {/* <Intro /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

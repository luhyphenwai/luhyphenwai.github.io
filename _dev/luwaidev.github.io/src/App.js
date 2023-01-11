// import "./App.scss";

// Components
import Intro from "./Components/Intro/Intro";
import Projects from "./Components/Projects/Projects";
import { BrowserRouter, Routes, Router, Switch, Route } from "react-router-dom";

function App() {
  // Set background color

  return (
    <div className="background">
      {/* <Intro /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Intro />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

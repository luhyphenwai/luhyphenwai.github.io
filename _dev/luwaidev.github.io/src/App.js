// import "./App.scss";

// Components
import Intro from "./Components/Intro/Intro";
import Projects from "./Components/Projects/Projects";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // Set background color

  return (
    <div className="background">
      <Intro />
      {/* <Route path={"/projects"} component={Projects} /> */}
    </div>
  );
}

export default App;

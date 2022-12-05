// import "./App.scss";
import * as colors from "./colors.js";

// Components
import Intro from "./Components/Intro/Intro";

function App() {
  // Set background color
  document.body.style = "background: #FFEEDD";

  return (
    <div className="background">
      <Intro />
    </div>
  );
}

export default App;

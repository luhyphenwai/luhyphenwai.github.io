import "./App.scss";

// Components
import Intro from "./Components/Intro/Intro";

function App() {
  // Set background color
  document.body.style = "background: #fbf8f1";

  return (
    <div className="background">
      <Intro />
    </div>
  );
}

export default App;

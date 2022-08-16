
import { useEffect } from "react";
import WindowWrapper from "./components/WindowWrapper/WindowWrapper";
import WindowTemp from "./components/WindowTemp/WindowTemp";
import "./App.scss";
import Presets from "./components/Presets/Presets";

const App = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("scroll", (e) => {
      e.preventDefault();
      window.scrollTo(0, 0);
    });

  }, []);

  return (
  <div className="App">
    <WindowWrapper />
    <Presets />
  </div>
)
};

export default App;

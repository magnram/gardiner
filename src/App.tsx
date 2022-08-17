
import { useEffect } from "react";
import WindowWrapper from "./components/WindowWrapper/WindowWrapper";
import WindowTemp from "./components/WindowTemp/WindowTemp";
import "./App.scss";
import Presets from "./components/Presets/Presets";
import { WindowContextProvider } from "./context/window-context";

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
    <WindowContextProvider>
      <WindowWrapper />
      <Presets />
    </WindowContextProvider>
  </div>
)
};

export default App;

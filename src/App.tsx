
import { useEffect } from "react";
import SWindowWrapper from "./components/SWindowWrapper/SWindowWrapper";
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
      <SWindowWrapper />
      <Presets />
    </WindowContextProvider>
  </div>
)
};

export default App;

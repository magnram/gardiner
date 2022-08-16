
import "./App.scss";
import { useEffect } from "react";
import SlidableWindow from "./components/SlidableWindow/SlidableWindow";
import WindowWrapper from "./components/WindowWrapper/WindowWrapper";

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
  </div>
)
};

export default App;


import "./App.scss";
import { useEffect } from "react";
import SlidableWindow from "./components/SlidableWindow/SlidableWindow";

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
    <SlidableWindow />
    <SlidableWindow />
    <SlidableWindow />
    <SlidableWindow />
  </div>
)
};

export default App;

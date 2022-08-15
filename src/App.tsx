
import "./App.scss";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("scroll", (e) => {
      e.preventDefault();
      window.scrollTo(0, 0);
    });

  }, []);
  
  return (<div className="App">
    Hey
  </div>
)
};

export default App;

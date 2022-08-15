
import "./App.scss";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (<div className="App">
    Hey
  </div>
)
};

export default App;

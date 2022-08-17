import { useEffect, useState } from "react";
import SlidableWindow from "../SlidableWindow/SlidableWindow";
import "./WindowWrapper.scss"

interface WindowData {
    id: number,
    pos1: number, 
    pos1Destination: number, 
    pos2: number, 
    pos2Destination: number
}

const WindowWrapper = () => {
    const [data, setData] = useState<WindowData[]>();
    useEffect(() => {
        fetch("https://gardiner-backend.herokuapp.com/getAll")
          .then((response) => response.json())
          .then((data) => {
              setData(data);
          });
      }, []);

    return (
        <div className="Windows">
            <div className="WindowWrapper">
                {data ? data.map((a, idx) => <SlidableWindow {...a} key={idx} />) : null}
            </div>
            <p> Dra i gardinene for å justere dem</p>
        </div>
    );
};

export default WindowWrapper;
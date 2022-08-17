import { useEffect, useState } from "react";
import { useWindowState, WindowState } from "../../context/window-context";
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
    const {windowState} = useWindowState();

    const [data, setData] = useState<WindowData[]>();
    useEffect(() => {
        fetch("http://localhost:8080/getAll")
          .then((response) => response.json())
          .then((data) => {
                setData(data);
          });
    }, []);

    return (
        <div className="Windows">
            <div className="WindowWrapper">
                {data ? data.map(a => <SlidableWindow {...a} key={a.id} />) : null}
            </div>
            <p> Dra i gardinene for å justere dem</p>
        </div>
    );
};

export default WindowWrapper;
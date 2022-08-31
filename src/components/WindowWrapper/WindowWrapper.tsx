import { useEffect, useState } from "react";
import { getBaseUrl } from "../..";
import { useWindowState, WindowState } from "../../context/window-context";
import SlidableWindow from "../SlidableWindow/SlidableWindow";
import "./WindowWrapper.scss"

interface WindowInputData {
    id: string,
    pos1: number, 
    pos1Destination: number, 
    pos2: number, 
    pos2Destination: number
}

const WindowWrapper = () => {
    // const {dispatchWindow, windowState} = useWindowState();

    const [data, setData] = useState<WindowInputData[]>();
    useEffect(() => {
        fetch(`${getBaseUrl()}/getAll`)
          .then((response) => response.json())
          .then((data: WindowInputData[]) => {
                setData(data);
          });
    }, []);

    return (
        <div className="Windows">
            <div className="WindowWrapper">
                {data && data.map((a, idx) => <SlidableWindow {...a} key={idx} />)}
            </div>
            <p> Dra i gardinene for å justere dem</p>
        </div>
    );
};

export default WindowWrapper;
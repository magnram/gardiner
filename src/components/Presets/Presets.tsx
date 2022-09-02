
import { getBaseUrl } from "../..";
import { useWindowState, WindowState } from "../../context/window-context";
import WindowTemp from "../WindowTemp/WindowTemp";
import "./Presets.scss";

const Presets = () => {
    const {dispatchWindow, windowState} = useWindowState();

    const updateAll = async (window: WindowState) => {
        fetch(`${getBaseUrl()}/updateAll`, {
        method: "POST",
        body: JSON.stringify(
            Object.keys(windowState).map((id) => ({
                id,
                pos1Destination: window.pos1Destination,
                pos2Destination: window.pos2Destination
            }))
        )
        }).then((response) => response.json())
          .then((data) => {
                dispatchWindow({type: "setWindowsState", payload: {window} });
        });
    }

    return (
        <div className="Presets">
            <div className="WindowWrapper">
                <WindowTemp pos1={100} pos2={100} opacity={80} 
                    onClick={() => updateAll({pos1Destination: 100, pos2Destination: 100})} />

                <WindowTemp pos1={100} pos2={0} opacity={80} 
                    onClick={() => updateAll({pos1Destination: 100, pos2Destination: 0})} />
                    
                <WindowTemp pos1={100} pos2={50} opacity={80} 
                    onClick={() => updateAll({pos1Destination: 100, pos2Destination: 50})} />
                    
                <WindowTemp pos1={51} pos2={0} opacity={80} 
                    onClick={() => updateAll({pos1Destination: 50, pos2Destination: 0})} />
            </div>
            <p className="GuideText"> Trykk for hurtigstyring av alle gardiner</p>
        </div>
    );
};

export default Presets;

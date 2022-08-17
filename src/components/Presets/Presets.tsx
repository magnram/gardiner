
import WindowTemp from "../WindowTemp/WindowTemp";
import "./Presets.scss";

const Presets = () => {

    return (
        <div className="Presets">
            <div className="WindowWrapper">
                <WindowTemp pos1={100} pos2={100} opacity={80}/>
                <WindowTemp pos1={100} pos2={0} opacity={80}/>
                <WindowTemp pos1={100} pos2={50} opacity={80}/>
                <WindowTemp pos1={50} pos2={0} opacity={80}/>
            </div>
            <p className="GuideText"> Trykk for hurtigstyring av alle gardiner</p>
        </div>
    );
};

export default Presets;


import WindowTemp from "../WindowTemp/WindowTemp";
import "./Presets.scss";

const Presets = () => {

    return (
        <div className="Presets">
            <WindowTemp pos1={100} pos2={0} opacity={60}/>
            <WindowTemp pos1={100} pos2={0} opacity={60}/>
            <WindowTemp pos1={100} pos2={0} opacity={60}/>
            <WindowTemp pos1={100} pos2={0} opacity={60}/>
        </div>
    );
};

export default Presets;

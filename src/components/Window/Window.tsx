import { useEffect, useState } from "react";
import "./Window.scss"

const url = "https://api.met.no/images/weathericons/svg/clearsky_polartwilight.svg";
const Window = ({weather}: {weather: boolean}) => {
    return (
        <div className="Window">
            <div className="weatherLayer" style={ weather ? { backgroundImage: `url(${url})` } : {}}></div>
            <div className="frameLayer"></div>
        </div>
    );
};

export default Window;

Window.defaultProps = {
    weather: false
}
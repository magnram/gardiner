import { useEffect, useState } from "react";
import Window from "../Window/Window";
import "./WindowTemp.scss"

interface Props {
    pos1: number,
    pos2: number,
    weather: boolean,
    onClick?: () => void,
    children?: JSX.Element,
    opacity?: number
}
const WindowTemp = ({ pos1, pos2, weather, onClick, children, opacity }: Props) => {
    return (
        <div className="WindowTemp" onClick={onClick}>
            <Window weather={weather}/>
            <div className="ActualBlindPosition" style={{
                top: `${100-pos1}%`, height: `${(pos1 - pos2).toString()}%`,
                opacity: `${opacity ? opacity : 30}%`
                }}>
            </div>
            <div className="Borders" style={{top: `${100-pos1}%`, height: `${(pos1 - pos2).toString()}%`}}>
                <div/><div/>
            </div>
            {children}
        </div>
    );
};

export default WindowTemp;

WindowTemp.defaultProps = {
    weather: false
};
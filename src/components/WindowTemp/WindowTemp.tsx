import { useEffect, useState } from "react";
import "./WindowTemp.scss"

interface Props {
    pos1: number,
    pos2: number,
    children?: JSX.Element,
    opacity?: number
}
const WindowTemp = ({ pos1, pos2, children, opacity }: Props) => {
    return (
        <div className="WindowTemp">
            <div className="Window"></div>
            <div className="ActualBlindPosition" style={{
                top: `${100-pos1}%`, height: `${(pos1 - pos2).toString()}%`,
                background: `${opacity}%`
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
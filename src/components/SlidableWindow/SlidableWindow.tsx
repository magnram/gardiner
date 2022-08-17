import { useEffect, useState } from "react";
import { Slider } from '@mui/material';import "./SlidableWindow.scss"
import WindowTemp from "../WindowTemp/WindowTemp";
import { useWindowState } from "../../context/window-context";

interface Props {
    id: number,
    pos1: number, 
    pos1Destination: number, 
    pos2: number, 
    pos2Destination: number,
    key: any
}

const SlidableWindow = ({id, pos1, pos1Destination, pos2, pos2Destination}: Props) => {
    const {windowState, dispatchWindow} = useWindowState();
    const [actual1, setActual1] = useState(pos1);
    const [actual2, setActual2] = useState(pos2);
    
    const value: number[] = Object.values(Object.values(windowState)[id])
    useEffect(() => {
        dispatchWindow({type: "setWindowState", payload: {window: {pos1Destination, pos2Destination}, number: id} });
    }, [])
    useEffect(() => {
        
        const val1 = Math.max(value[0], value[1]);
        const val2 = Math.min(value[0], value[1]);

        if (val1 < actual1) setTimeout(() => {
            if (val1 < actual1) setActual1(actual1-0.1);
        }, 10);
        if (val1 > actual1) setTimeout(() => {
            if (val1 > actual1) setActual1(actual1+0.1);
        }, 10);

        if (val2 < actual2) setTimeout(() => {
            if (val2 < actual2) setActual2(actual2-0.1);
        }, 10);
        if (val2 > actual2) setTimeout(() => {
            if (val2 > actual2) setActual2(actual2+0.1);
        }, 10);

    }, [value, actual1, actual2]);

    // useEffect(() => {
    //     if (value[0] != pos1Destination || value[1] != pos2Destination) setValue([pos1Destination, pos2Destination]);
    // }, [pos1Destination, pos2Destination, value])

    const handleChange = (event: Event, newValue: number | number[]) => {
        const num = newValue as number[];
        const window = { pos1Destination: num[0], pos2Destination: num[1]};

        dispatchWindow({type: "setWindowsState", payload: {window, number: id} });
    };

    return (
        <div className="SlidableWindow"> 
            <WindowTemp pos1={actual1} pos2={actual2}>
                    <Slider
                        orientation="vertical"
                        defaultValue={[pos1, pos2]}
                        valueLabelDisplay="off"
                        max={100}
                        min={0}
                        value={value}
                        onChange={handleChange}
                    />
            </WindowTemp>
        </div>
    );
};

export default SlidableWindow;
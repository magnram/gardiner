import { useEffect, useState } from "react";
import { Slider } from '@mui/material';import "./SlidableWindow.scss"
import WindowTemp from "../WindowTemp/WindowTemp";
import { useWindowState, WindowState } from "../../context/window-context";

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
    const [value, setValue] = useState([pos1Destination, pos2Destination]);
    const [actual1, setActual1] = useState(pos1);
    const [actual2, setActual2] = useState(pos2);
    
    const val: number[] = Object.values(Object.values(windowState)[id]);

    // This useEffect updates the initial values of the global state to match the backend
    useEffect(() => {
        dispatchWindow({type: "setWindowState", payload: {window: {pos1Destination, pos2Destination}, number: id} });
    }, [])

    useEffect(() => setValue(val), [windowState])

    // This useEffect updates `actual1` and `actual1`, should simulate movement in real life
    useEffect(() => {   
        const val1 = Math.max(val[0], val[1]);
        const val2 = Math.min(val[0], val[1]);
        // if(actual1 % 1 == 0 && actual2 % 1 == 0 && id == 0) console.log(val1, actual1, "|", val2, actual2, "|", pos1Destination, pos2Destination)

        if (val1 < actual1) setTimeout(() => {
            if (val1 < actual1) setActual1(Math.round((actual1-0.1)*10) / 10);
        }, 10)
        else if (val1 > actual1) setTimeout(() => {
            if (val1 > actual1) setActual1(Math.round((actual1+0.1)*10) / 10);
        }, 10)

        else if (val2 < actual2) setTimeout(() => {
            if (val2 < actual2) setActual2(Math.round((actual2-0.1)*10) / 10);
        }, 10)
        else if (val2 > actual2) setTimeout(() => {
            if (val2 > actual2) setActual2(Math.round((actual2+0.1)*10) / 10);
        }, 10)
    }, [windowState, actual1, actual2]);

    const updateOne = async (window: WindowState) => {
        console.log("update one")
        console.log(window)
        fetch("http://localhost:8080/updateOne", {
            method: "POST",
            body: JSON.stringify({
                id,
                pos1Destination: window.pos1Destination,
                pos2Destination: window.pos2Destination
            })
        }).then((response) => response.json())
          .then((data) => { dispatchWindow({type: "setWindowState", payload: {window, number: id} })
        })
    }

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    const handleChangeCommitted = () => {
        const window = { pos1Destination: value[0], pos2Destination: value[1]};
        updateOne(window);
    }

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
                        onChangeCommitted={handleChangeCommitted}
                    />
            </WindowTemp>
        </div>
    );
};

export default SlidableWindow;
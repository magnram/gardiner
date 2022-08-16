import { useEffect, useState } from "react";
import { Slider } from '@mui/material';import "./SlidableWindow.scss"

interface Props {
    id: number,
    pos1: number, 
    pos1Destination: number, 
    pos2: number, 
    pos2Destination: number,
    key: any
}

const SlidableWindow = ({pos1, pos1Destination, pos2, pos2Destination}: Props) => {
    const [value, setValue] = useState([pos1, pos2]);
    const [actual1, setActual1] = useState(pos1);
    const [actual2, setActual2] = useState(pos2);

    
    // console.log(value, "|", actual1, ",", actual2)
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

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <div className="SlidableWindow">
            <div className="ActualBlindPosition" style={{top: `${100-actual1}%`, height: `${(actual1 - actual2).toString()}%`}}>
                <div/>
                <div/> 
            </div>
            <Slider
                orientation="vertical"
                defaultValue={[pos1, pos2]}
                valueLabelDisplay="auto"
                max={100}
                min={0}
                value={value}
                onChange={handleChange}
            />

        </div>
    );
};

export default SlidableWindow;
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
    const valuetext = (value: number) => `${value}%`;
    const marks = [{value: pos1}, {value: pos2} ];

    return (
        <div className="SlidableWindow">
            <Slider
                getAriaLabel={() => 'Temperature'}
                orientation="vertical"
                getAriaValueText={valuetext}
                defaultValue={[pos1, pos2]}
                valueLabelDisplay="auto"
                marks={marks}
            />
        </div>
    );
};

export default SlidableWindow;
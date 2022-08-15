import { useEffect } from "react";
import { Slider } from '@mui/material';import "./SlidableWindow.scss"

const SlidableWindow = () => {

    const valuetext = (value: number) => `${value}°C`;
    const marks = [{value: 0}, {value: 100} ];
    
  return (
    <div className="SlidableWindow">
        <Slider
            getAriaLabel={() => 'Temperature'}
            orientation="vertical"
            getAriaValueText={valuetext}
            defaultValue={[20, 37]}
            valueLabelDisplay="auto"
            marks={marks}
        />
    </div>
    )
};

export default SlidableWindow;

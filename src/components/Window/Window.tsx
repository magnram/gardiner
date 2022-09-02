import { useEffect, useState } from "react";
import { getBaseUrl } from "../..";
import "./Window.scss"


const Window = ({weather}: {weather: boolean}) => {
    const lat = 59.93194229740684;
    const lng = 10.7339692059069;
    const [url, setUrl] = useState<string>();

    useEffect(() => {
        if(weather) {
            fetch(`${getBaseUrl()}/yr/getWeather?lat=${lat}&lng=${lng}`)
            .then(res => res.text())
            .then(data => {
                setUrl(data);
            })
            
        }
    }, [weather])
    
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
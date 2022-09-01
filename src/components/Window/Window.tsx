import { useEffect, useState } from "react";
import { getBaseUrl } from "../..";
import "./Window.scss"


const Window = ({weather}: {weather: boolean}) => {
    const lat = 19.9138204;
    const lng = 30.752245;
    const [location, setLocation] = useState<{lat: number, lng: number}>();
    const [url, setUrl] = useState<string>();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => setLocation({ 
              lat: position.coords.latitude, 
              lng: position.coords.longitude
            }), 
            err => console.log(err)
        );
    }, []);
    useEffect(() => {
        if(weather && location) {
            fetch(`${getBaseUrl()}/yr/getWeather?lat=${location.lat}&lng=${location.lng}`)
            .then(res => res.text())
            .then(data => {
                setUrl(data);
            })
            
        }
    }, [location])
    
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
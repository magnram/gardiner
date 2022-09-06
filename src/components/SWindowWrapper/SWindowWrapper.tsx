import { getBaseUrl } from "../..";
import useSWR from "swr";
import SlidableWindow from "../SlidableWindow/SlidableWindow";
import "./SWindowWrapper.scss"
import { basicFetcher } from "../../utils/fetchers";
import { getSunPositionPerWindow } from "../../utils/weather";
import { useEffect, useState } from "react";

interface WindowInputData {
    id: string,
    pos1: number, 
    pos1Destination: number, 
    pos2: number, 
    pos2Destination: number
}

interface YrReturnObject {
    symbol_url: string
    air_temperature: number
    wind_speed: number
    wind_direction: number
    precipitation: number
}

const SWindowWrapper = () => {
    const [sunPositionInPercent, setSunPositionInPercent] = useState<number | null>(-100);
    const { data, error } = useSWR<WindowInputData[]>(
    `${getBaseUrl()}/getAll`,
        basicFetcher
    );

    const lat = 59.93194229740684;
    const lng = 10.7339692059069;

    const [yrData, setYrData] = useState<YrReturnObject>();
    useEffect(() => {        
        fetch(`${getBaseUrl()}/yr/getWeather?lat=${lat}&lng=${lng}`)
        .then(res => res.json())
        .then(data => {
            setYrData(data);
        })
        updateSun();
    }, [])

    const updateSun = async () => {
        let date = new Date();
        // date = new Date(date.setMinutes(date.getMinutes() + 24));
        setSunPositionInPercent(getSunPositionPerWindow(date, lat, lng))
        console.log("Sun position in percent", getSunPositionPerWindow(date, lat, lng))
    }

    setInterval(updateSun, 1000 * 60);

    if (error) return <div>failed to load</div>;

    if (!data) return <div>loading...</div>;

    return (
        <div className="Windows">
            <div className="SWindowWrapper">
                {data.map((a, idx) => 
                    <>
                        <SlidableWindow {...a} key={idx} />
                        {idx !== data.length-1 && <div key={idx + "1"} className="WindowSeparator" />}
                    </>
                )}
                <img className="sun" src={yrData?.symbol_url} style={{left: sunPositionInPercent ? `${(sunPositionInPercent*100)}%` : "-50%"}}></img>
            </div>
            <p> Dra i gardinene for å justere dem!</p>
        </div>
    );
};

export default SWindowWrapper;
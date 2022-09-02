import { getBaseUrl } from "../..";
import useSWR from "swr";
import SlidableWindow from "../SlidableWindow/SlidableWindow";
import "./SWindowWrapper.scss"
import { basicFetcher } from "../../utils/fetchers";

interface WindowInputData {
    id: string,
    pos1: number, 
    pos1Destination: number, 
    pos2: number, 
    pos2Destination: number
}

const SWindowWrapper = () => {

    const { data, error } = useSWR<WindowInputData[]>(
    `${getBaseUrl()}/getAll`,
        basicFetcher
    );

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
            </div>
            <p> Dra i gardinene for å justere dem</p>
        </div>
    );
};

export default SWindowWrapper;
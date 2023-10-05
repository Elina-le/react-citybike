import React, {useState, useEffect} from "react";
import StationService from "../services/stations";

const StationList = () => {

    const [stationData, setStationData] = useState([])

    useEffect(() => {
        StationService.getAll().then(data => {
            setStationData(data)
            console.log(data)
        })
    },[])

    return (
        <div>
            <h1>Stations</h1>

            {stationData.map(data => (
                <p key={data.id}>{data.nimi}</p>
            ))}
        </div>
    )
}

export default StationList;
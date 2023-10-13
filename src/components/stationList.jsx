import React, {useState, useEffect} from "react";
import StationService from "../services/stations";
import { Link } from 'react-router-dom';

const StationList = () => {

    const [stationData, setStationData] = useState([]);
 
    useEffect(() => {
        StationService.getAll().then(data => {
            setStationData(data)
        })
    },[])

    return (
        <div>
            <h1>Station List</h1>

            {stationData.map(data => (
                <p key={data.id}><Link to={`/stations/${data.id}`} state={{...data}}>{data.nimi}</Link></p>
            ))}

        </div>
    )
}

export default StationList;
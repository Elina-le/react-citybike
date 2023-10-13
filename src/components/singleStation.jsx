import React, {useState, useEffect} from "react";
import StationService from "../services/stations";
import { useLocation, useParams } from 'react-router-dom';


const SingleStation = () => {

    let { state } = useLocation();
    const { id } = useParams();

    const [stationCalculations, setStationCalculations] = useState([]);
 
    console.log(stationCalculations)

    useEffect(() => {
        StationService.getById(id).then(data => {
            setStationCalculations(data)
        })
    },[id])


    return (
        <div>
            <h1>Single Station</h1>
            <p>Station name: {state.nimi}</p>
            <p>Address: {state.adress}</p>
            <p>City: {state.kaupunki}</p>
            <br/>
            <p>Number of departures: {stationCalculations.departures}</p>
            <p>Number of returns: {stationCalculations.returns}</p>
        </div>
    )
}

export default SingleStation;
import React, {useState, useEffect} from "react";
import StationService from "../services/stations";
import { useLocation, useParams } from 'react-router-dom';
import { useJsApiLoader, useLoadScript } from "@react-google-maps/api";
import Map from "../components/Map";


const SingleStation = () => {

    //Tämä toimii muuten, mutta tämän kanssa ei näy Marker-komponentti:
    
    // const {isLoaded} = useLoadScript({
    //         googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    // });

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    let { state } = useLocation();
    const { id } = useParams();
    const [stationCalculations, setStationCalculations] = useState([]);
 
    useEffect(() => {
        StationService.getById(id).then(data => {
            setStationCalculations(data)
        })
    },[id])

    return (
        <div>
            {isLoaded ? 
                <div>
                    <Map x={state.x} 
                    y = {state.y} />
                </div> 
                : <div>Loading...</div>
            }
    
            <br/>
            <h1>Single Station</h1>
            <p>Station name: {state.nimi}</p>
            <p>Address: {state.adress}</p>
            <p>City: {state.kaupunki}</p>
            <br/>
            <h3>Station statistics</h3>
            <br/>
            <p>Number of departures: {stationCalculations.departures}</p>
            <p>Number of returns: {stationCalculations.returns}</p>
            <p>Average distance of a journey starting from this station: {stationCalculations.averageDistanceStartingFromStation} km</p>
            <p>Average distance of a journey ending at this station: {stationCalculations.averageDistanceEndingAtStation} km</p>
            <br/>
            <h5>Top 5 Return Stations:</h5>
            {
                stationCalculations && stationCalculations.top5ReturnStations &&
                stationCalculations.top5ReturnStations.map((data, index) => (
                    <p key={index}>{data.returnStationName}, Number of returns: {data.numberOfReturns}</p>
                ))
            } 
            <br/>
            <h5>Top 5 Departure Stations:</h5>
            {
                stationCalculations && stationCalculations.top5DepartureStations &&
                stationCalculations.top5DepartureStations.map((data, index) => (
                    <p key={index}>{data.departureStationName}, Number of departures: {data.numberOfDepartures}</p>
                ))
            } 
        </div>
    )
}

export default SingleStation;
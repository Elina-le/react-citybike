import React, {useState, useEffect} from "react";
import StationService from "../../services/stations";
import { useLocation, useParams } from 'react-router-dom';
import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./Map";
import Loading from '../Loading';
import { useErrorBoundary } from 'react-error-boundary'

const SingleStation = () => {

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    let { state } = useLocation();
    const { id } = useParams();
    const [stationCalculations, setStationCalculations] = useState([]);
    const [loading, setLoading] = useState(true);
    const { showBoundary } = useErrorBoundary();

    const loadData = () => {
        StationService.getById(id).then(data => {
            setStationCalculations(data)
            setLoading(false);
        }).catch(error => {
            showBoundary(error)
        });
        
    }
 
    useEffect(() => {
       loadData()
    },[id])

    return (
        <div>
            {isLoaded ? 
                <div>
                    <Map x={state.x} 
                    y = {state.y} />
                </div> 
                : <Loading />
            }
    
            <br/>
            <h1>Single Station</h1>
            { loading ? <Loading /> :
                <div>
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
            } 
        </div>
    )
}

export default SingleStation;
import React, {useState, useEffect} from "react";
import StationService from "../../services/stations";
import { useLocation, useParams } from 'react-router-dom';
import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./Map";
import Loading from '../Loading';
import { useErrorBoundary } from 'react-error-boundary'
import styles from './SingleStation.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const SingleStation = () => {

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    let { state } = useLocation();
    const { id } = useParams();
    const [stationCalculations, setStationCalculations] = useState([]);
    const [loading, setLoading] = useState(true);
    const { showBoundary } = useErrorBoundary();

    useEffect(() => {
        const loadData = () => {
            StationService.getById(id).then(data => {
                setStationCalculations(data)
                setLoading(false);
            }).catch(error => {
                showBoundary(error)
            });
        }
        loadData()
     },[id, showBoundary])

    return (
        <div className={styles.singleStationSection}>
            {isLoaded ? 
                <div>
                    <Map x={state.x} 
                    y = {state.y} />
                </div> 
                : <Loading />
            }
            <div className={styles.stationDataContainer}>
                { loading ? <Loading /> :
                    <div className={styles.stationData}>
                        <div className={styles.headingContainer}>
                            <Container>
                                <h2>{state.nimi}</h2>
                                <p>{state.osoite} <br/> {state.kaupunki}</p>
                            </Container>
                        </div>
                        <div className={styles.statisticContainer}>
                            <Container>
                                <h5 className={styles.staticticsLbl}>Station Statistics</h5>
                                <Row>
                                    <Col lg={9} sm={10} xs={10}>Number of departures:</Col>
                                    <Col lg={3} sm={2} xs={2}>{stationCalculations.departures}</Col>
                                </Row>
                                <Row>
                                    <Col lg={9} sm={10} xs={10}>Number of returns:</Col>
                                    <Col lg={3} sm={2} xs={2}>{stationCalculations.returns}</Col>
                                </Row>
                                <Row>
                                    <Col lg={9} sm={10} xs={10}>Average journey distance from this station:</Col>
                                    <Col lg={3} sm={2} xs={2}>{stationCalculations.averageDistanceStartingFromStation} km</Col>
                                </Row>
                                <Row>
                                    <Col lg={9} sm={10} xs={10}>Average journey distance to this station:</Col>
                                    <Col lg={3} sm={2} xs={2}>{stationCalculations.averageDistanceEndingAtStation} km</Col>
                                </Row>
                                
                                <h5  className={styles.staticticsLbl}>Top 5 Return Stations:</h5>
                                {stationCalculations && stationCalculations.top5ReturnStations &&
                                    stationCalculations.top5ReturnStations.map((data, index) => (
                                    <Row key={index}>
                                        <Col lg={9} sm={10} xs={10}>{data.returnStationName}</Col> 
                                        <Col lg={3} sm={2} xs={2}>{data.numberOfReturns}</Col>
                                    </Row>
                                ))}

                                <h5 className={styles.staticticsLbl}>Top 5 Departure Stations:</h5>
                                {stationCalculations && stationCalculations.top5DepartureStations &&
                                    stationCalculations.top5DepartureStations.map((data, index) => (
                                    <Row key={index}>
                                        <Col lg={9} sm={10} xs={10}>{data.departureStationName}</Col> 
                                        <Col lg={3} sm={2} xs={2}>{data.numberOfDepartures}</Col>
                                    </Row>
                                ))}
                            </Container>
                            <p></p>
                        </div>  
                    </div> 
                } 
            </div>
        </div>
    )
}

export default SingleStation;
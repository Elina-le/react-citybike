import React from "react";
import Hero from './Hero';
import { Link } from 'react-router-dom';
import styles from './homepage.module.css';
import Button from '../Button';
import ImageStations from '../../stations.png'
import ImageJourneys from '../../journeys.png'

const HomePage = () => {
    return (
        <div>
            <Hero />
         
                <div className={styles.stationSection}>
                    <div className={styles.widthContainer}>
                        <div className={styles.stationContent}>
                            <h2 className={styles.head}>Stations</h2>
                            <p className={styles.para}>Explore Helsinki's City Bike Stations with ease on our Station page. Discover a comprehensive list of bike stations in the capital area and access detailed information about each one.</p>                            
                            <Link to="/stations">
                                <Button text="View Stations" />
                            </Link>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src={ImageStations} alt="Stations" className={styles.stationImage}/>
                        </div>
                    </div>
                </div>
           
                <div className={styles.journeySection}>
                    <div className={styles.widthContainer}>
                        <div  className={styles.imageContainer}>
                            <img src={ImageJourneys} alt="Journeys" className={styles.journeyImage}/>
                        </div>
                        <div className={styles.journeyContent}>
                            <h2 className={styles.head}>Journeys</h2>
                            <p className={styles.para}>Check out the journeys made on Helsinki City Bikes through our Journeys page. Get fascinating and detailed information about cycle routes, their lengths and durations.</p>
                            <Link to="/journeys">
                                <Button text="View Journeys" />
                            </Link>
                        </div>
                    </div>
                </div>
          
        </div>
    )
}

export default HomePage;
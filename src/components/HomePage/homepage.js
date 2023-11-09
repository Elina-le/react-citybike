import React from "react";
import { Link } from 'react-router-dom';
import styles from './homepage.module.css'; // Import the CSS file

const HomePage = () => {
    return (
        <div>
            <h1>City Bike Data</h1>
            <h4>of Helsinki Capital Area</h4>
            <div className={styles.section}>
                <h2>About Stations</h2>
                <p>Brief description about bike stations...</p>
                <Link to="/stations">
                    <button>View Stations</button>
                </Link>
            </div>
            <div className={styles.section}>
                <h2>About Journeys</h2>
                <p>Brief description about journeys...</p>
                <Link to="/journeys">
                    <button>View Journeys</button>
                </Link>
            </div>

        </div>
    )
}

export default HomePage;
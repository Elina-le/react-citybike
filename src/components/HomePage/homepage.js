import React from "react";
import Hero from './Hero';
import { Link } from 'react-router-dom';
import styles from './homepage.module.css'; // Import the CSS file

const HomePage = () => {
    return (
        <div>
            <Hero />
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
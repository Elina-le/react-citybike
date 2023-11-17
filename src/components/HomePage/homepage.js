import React from "react";
import Hero from './Hero';
import { Link } from 'react-router-dom';
import styles from './homepage.module.css'; // Import the CSS file
import Button from '../Button';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <div className={styles.section}>
                <h2>About Stations</h2>
                <p>Brief description about bike stations...</p>
                <Link to="/stations">
                    <Button text="View Stations" />
                </Link>
            </div>
            <div className={styles.section}>
                <h2>About Journeys</h2>
                <p>Brief description about journeys...</p>
                <Link to="/journeys">
                    <Button text="View Journeys" />
                </Link>
            </div>

        </div>
    )
}

export default HomePage;
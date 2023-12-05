import styles from './RouteNotFound.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Image404 from '../visualAssets/images/404.png'

export function RouteNotFound() {
    
    return (
        <div className={styles.errorpage}>
            <img className={styles.image404} src={Image404} alt="404" />
            <h1>The page you're looking for <br /> seems to be missing</h1>
            <p>Maybe you'll find what you're looking for here:</p>
            <Link className={styles.link404} to="/">Home</Link>       
            <Link className={styles.link404} to="stations">Stations</Link>
            <Link className={styles.link404} to="journeys">Journeys</Link>
        </div>
    )
}
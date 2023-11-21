import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.text}>
            <h1 className={styles.heading}>City Bike Data</h1>
            <h2 className={styles.subHead}>of Helsinki Capital Area</h2>
        </div>
    </div>
  );
};

export default Hero;
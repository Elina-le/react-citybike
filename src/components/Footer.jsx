import React from 'react';
import styles from './Footer.module.css';
import GithubIcon from './IconComponents/GithubIcon';
import CopyrightIcon from './IconComponents/CopyrightIcon';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contentSection}>
          <div className={styles.iconSection}>
            <CopyrightIcon />
          </div>
          <div className={styles.textSection}>
            <p className={styles.footerText}>2023 Elina Lepistö</p>
            <p className={styles.footerText}>Data by City Bike Finland</p>
          </div>
        </div>
        <div className={styles.contentSection}>
          <div className={styles.iconSection}>
            <GithubIcon />
          </div>
          <div className={styles.textSection}>
            <a className={styles.footerText} href="https://github.com/Elina-le/react-citybike" target="blank">Front-end project</a>
            <a className={styles.footerText} href="https://github.com/Elina-le/CityBikeAPI" target="blank">Back-end project</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import styles from './Footer.module.css';
import GithubIcon from './GithubIcon'; // Import the Icon component

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div>
          <p>© 2023 Elina Lepistö</p>
          <p>Data by City Bike Finland</p>
        </div>
        <div className={styles.linkSection}>
          <GithubIcon />
          <a className={styles.upperLink} href="https://github.com/" target="blank">Front-end project</a>
          <a href="https://github.com/" target="blank">Back-end project</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
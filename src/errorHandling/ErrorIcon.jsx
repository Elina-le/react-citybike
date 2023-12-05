import React from 'react';
import { ReactComponent as Icon } from '../visualAssets/swgIcons/circle-exclamation-solid.svg';
import styles from './ErrorIcon.module.css';

const GithubIcon = () => {
  return (
    <div className={styles.icon}>
      <Icon />
    </div>
  );
};

export default GithubIcon;
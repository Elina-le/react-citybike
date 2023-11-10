import React from 'react';
import { ReactComponent as Icon } from '../githubFA.svg';
import styles from './GithubIcon.module.css';

const GithubIcon = () => {
  return (
    <div className={styles.icon}>
      <Icon />
    </div>
  );
};

export default GithubIcon;
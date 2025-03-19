import React from 'react';
import styles from '../../styles/Hero.module.css';

const Hero = ({ tagline, description }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.tagline}>{tagline}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
};

export default Hero;
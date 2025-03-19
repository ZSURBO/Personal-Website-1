import React from 'react';
import Link from 'next/link';
import styles from '../../styles/CallToAction.module.css';

const CallToAction = ({ text, buttonText, link }) => {
  return (
    <section className={styles.cta}>
      <p className={styles.text}>{text}</p>
      <Link href={link}>
        <a className={styles.button}>{buttonText}</a>
      </Link>
    </section>
  );
};

export default CallToAction;
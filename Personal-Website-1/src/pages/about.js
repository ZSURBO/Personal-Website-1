import React from 'react';
import Head from 'next/head';
import styles from '../styles/About.module.css';

// Components
import Header from '../components/layout/Header';
import ProfileSection from '../components/sections/ProfileSection';
import SkillsSection from '../components/sections/SkillsSection';
import TimelineSection from '../components/sections/TimelineSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import Footer from '../components/layout/Footer';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>关于我 | Your Name</title>
        <meta name="description" content="了解更多关于我的经历和技能" />
      </Head>

      <Header />
      
      <main className={styles.main}>
        <ProfileSection />
        <SkillsSection />
        <TimelineSection />
        <CertificationsSection />
      </main>

      <Footer />
    </div>
  );
}
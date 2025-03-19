import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

// Components
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import CallToAction from '../components/sections/CallToAction';
import SocialLinks from '../components/ui/SocialLinks';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Your Name - Personal Website</title>
        <meta name="description" content="Your personal website description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className={styles.main}>
        <Hero 
          tagline="全栈开发者 | 设计师" 
          description="创造有影响力的数字体验"
        />
        
        <FeaturedProjects />
        
        <CallToAction 
          text="想了解更多我的作品?" 
          buttonText="查看作品集" 
          link="/portfolio" 
        />
        
        <SocialLinks />
      </main>

      <Footer />
    </div>
  );
}
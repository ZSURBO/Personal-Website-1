import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Contact.module.css';

// Components
import Header from '../components/layout/Header';
import ContactForm from '../components/sections/ContactForm';
import ContactInfo from '../components/sections/ContactInfo';
import Map from '../components/ui/Map';
import SocialLinks from '../components/ui/SocialLinks';
import Footer from '../components/layout/Footer';

export default function Contact() {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleSubmit = async (formData) => {
    // Handle form submission
    try {
      // API call to send email
      setFormStatus({
        submitted: true,
        success: true,
        message: '消息已发送！我会尽快回复您。'
      });
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: '发送失败，请稍后再试或直接发送邮件至我的邮箱。'
      });
    }
  };
  
  return (
    <div className={styles.container}>
      <Head>
        <title>联系我 | Your Name</title>
        <meta name="description" content="联系方式和表单" />
      </Head>

      <Header />
      
      <main className={styles.main}>
        <h1 className={styles.title}>联系我</h1>
        
        <div className={styles.contactGrid}>
          <ContactForm 
            onSubmit={handleSubmit}
            formStatus={formStatus}
          />
          
          <ContactInfo />
        </div>
        
        <Map location={{ lat: 40.7128, lng: -74.0060 }} />
        
        <SocialLinks />
      </main>

      <Footer />
    </div>
  );
}
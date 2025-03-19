import React from 'react';
import styles from '../../styles/Certifications.module.css';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2023',
      image: '/images/certs/aws.png'
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2022',
      image: '/images/certs/react.png'
    },
    {
      title: 'Google UX Design Certificate',
      issuer: 'Google',
      date: '2022',
      image: '/images/certs/google.png'
    }
  ];

  return (
    <section className={styles.certificationsSection}>
      <h2>证书与认证</h2>
      <div className={styles.certifications}>
        {certifications.map((cert, index) => (
          <div key={index} className={styles.certCard}>
            <div className={styles.certImage}>
              <img src={cert.image} alt={cert.title} />
            </div>
            <div className={styles.certInfo}>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <span>{cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
import React from 'react';
import styles from '../../styles/Contact.module.css';

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.infoCard}>
        <h3 className={styles.infoTitle}>联系方式</h3>
        <div className={styles.infoContent}>
          <p>邮箱：your.email@example.com</p>
          <p>电话：+86 123 4567 8900</p>
          <p>地址：中国 某省 某市</p>
        </div>
      </div>

      <div className={styles.infoCard}>
        <h3 className={styles.infoTitle}>工作时间</h3>
        <div className={styles.infoContent}>
          <p>周一至周五：9:00 - 18:00</p>
          <p>周六至周日：休息</p>
        </div>
      </div>

      <div className={styles.infoCard}>
        <h3 className={styles.infoTitle}>社交媒体</h3>
        <div className={styles.socialLinks}>
          <a href="https://github.com/yourusername" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com/yourusername" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
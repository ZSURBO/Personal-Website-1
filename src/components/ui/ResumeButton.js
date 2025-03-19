// components/ui/ResumeButton.js
import React from 'react';
import Link from 'next/link';
import styles from '../../styles/ResumeButton.module.css';

const ResumeButton = () => {
  return (
    <div className={styles.resumeButtons}>
      <Link href="/resume-cn.pdf">
        <a className={styles.resumeButton} target="_blank" rel="noopener noreferrer">
          下载简历 (中文版)
        </a>
      </Link>
      <Link href="/resume-en.pdf">
        <a className={styles.resumeButton} target="_blank" rel="noopener noreferrer">
          Download Resume (English)
        </a>
      </Link>
    </div>
  );
};

export default ResumeButton;
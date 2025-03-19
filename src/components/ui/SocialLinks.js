import React from 'react';
import styles from '../../styles/SocialLinks.module.css';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: '🔗'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: '🔗'
    },
    // 可以添加更多社交媒体链接
  ];

  return (
    <div className={styles.socialLinks}>
      {socialLinks.map(link => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          {link.icon} {link.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const { title, category, image, technologies, description, link, github } = project;
  
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={image} 
          alt={title}
          layout="fill"
          objectFit="cover"
          className={styles.image}
        />
        <div className={styles.overlay}>
          <div className={styles.links}>
            {link && (
              <Link href={link}>
                <a className={styles.linkButton} target="_blank" rel="noopener noreferrer">
                  查看项目
                </a>
              </Link>
            )}
            {github && (
              <Link href={github}>
                <a className={styles.linkButton} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
      
      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.technologies}>
          {technologies.map(tech => (
            <span key={tech} className={styles.tag}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
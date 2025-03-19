import React from 'react';
import styles from '../../styles/FeaturedProjects.module.css';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "项目一",
      description: "项目描述...",
      image: "/images/project1.jpg",
      link: "/portfolio/project1"
    },
    // 可以添加更多项目
  ];

  return (
    <section className={styles.featuredProjects}>
      <h2>精选项目</h2>
      <div className={styles.projectGrid}>
        {projects.map(project => (
          <div key={project.id} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
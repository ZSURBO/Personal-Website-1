import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Portfolio.module.css';

// Components
import Header from '../components/layout/Header';
import ProjectFilter from '../components/ui/ProjectFilter';
import ProjectCard from '../components/ui/ProjectCard';
import CaseStudy from '../components/sections/CaseStudy';
import Footer from '../components/layout/Footer';

// Sample project data
const projects = [
  {
    id: 1,
    title: "响应式电商网站",
    category: "Web开发",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    description: "为本地商家开发的全功能电商平台...",
    link: "https://project-link.com",
    github: "https://github.com/yourusername/project"
  },
  // More projects...
];

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>作品集 | Your Name</title>
        <meta name="description" content="查看我的项目作品集" />
      </Head>

      <Header />
      
      <main className={styles.main}>
        <h1 className={styles.title}>我的作品集</h1>
        
        <ProjectFilter 
          currentFilter={filter} 
          onFilterChange={setFilter} 
        />
        
        <div className={styles.projectsGrid}>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <CaseStudy />
      </main>

      <Footer />
    </div>
  );
}
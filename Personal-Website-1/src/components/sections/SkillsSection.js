import React from 'react';
import styles from '../../styles/SkillsSection.module.css';

// Skill progress bar component
const SkillBar = ({ skill, level }) => (
  <div className={styles.skillBar}>
    <div className={styles.skillInfo}>
      <span className={styles.skillName}>{skill}</span>
      <span className={styles.skillLevel}>{level}%</span>
    </div>
    <div className={styles.progressBar}>
      <div 
        className={styles.progress} 
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const SkillsSection = () => {
  const technicalSkills = [
    { skill: "React", level: 90 },
    { skill: "JavaScript", level: 85 },
    { skill: "Node.js", level: 80 },
    { skill: "HTML/CSS", level: 95 },
    { skill: "UI/UX Design", level: 75 },
  ];
  
  const softSkills = [
    { skill: "团队协作", level: 90 },
    { skill: "项目管理", level: 85 },
    { skill: "沟通能力", level: 80 },
    { skill: "问题解决", level: 85 },
    { skill: "时间管理", level: 75 },
  ];
  
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.sectionTitle}>专业技能</h2>
      
      <div className={styles.skillsContainer}>
        <div className={styles.skillCategory}>
          <h3>技术技能</h3>
          {technicalSkills.map((skill, index) => (
            <SkillBar 
              key={index} 
              skill={skill.skill} 
              level={skill.level} 
            />
          ))}
        </div>
        
        <div className={styles.skillCategory}>
          <h3>软技能</h3>
          {softSkills.map((skill, index) => (
            <SkillBar 
              key={index} 
              skill={skill.skill} 
              level={skill.level} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
import React from 'react';
import styles from '../../styles/Timeline.module.css';

const TimelineSection = () => {
  const timelineEvents = [
    {
      year: '2023',
      title: '高级开发工程师',
      company: '某科技公司',
      description: '负责核心产品开发，带领团队完成多个重要项目。'
    },
    {
      year: '2021',
      title: 'Web开发工程师',
      company: '某互联网公司',
      description: '参与开发企业级应用，优化用户体验。'
    },
    {
      year: '2019',
      title: '软件工程专业毕业',
      company: '某大学',
      description: '获得计算机科学学士学位。'
    }
  ];

  return (
    <section className={styles.timelineSection}>
      <h2>职业经历</h2>
      <div className={styles.timeline}>
        {timelineEvents.map((event, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineYear}>{event.year}</div>
            <div className={styles.timelineContent}>
              <h3>{event.title}</h3>
              <h4>{event.company}</h4>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
import React from 'react';
import styles from '../../styles/Portfolio.module.css';

const ProjectFilter = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', label: '全部' },
    { id: 'web', label: 'Web开发' },
    { id: 'mobile', label: '移动应用' },
    { id: 'design', label: '设计' },
    { id: 'other', label: '其他' }
  ];

  return (
    <div className={styles.filterContainer}>
      {filters.map(filter => (
        <button
          key={filter.id}
          className={`${styles.filterButton} ${currentFilter === filter.id ? styles.active : ''}`}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
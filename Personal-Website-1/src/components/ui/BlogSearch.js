import React from 'react';
import styles from '../../styles/Blog.module.css';

const BlogSearch = ({ searchTerm, onSearchChange, onTagFilter, currentTag }) => {
  const tags = [
    '全部',
    '前端开发',
    '后端开发',
    '设计',
    'DevOps',
    '人工智能'
  ];

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="搜索文章..."
        className={styles.searchInput}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <div className={styles.tagContainer}>
        {tags.map(tag => (
          <span
            key={tag}
            className={`${styles.tag} ${currentTag === tag ? styles.active : ''}`}
            onClick={() => onTagFilter(tag === '全部' ? '' : tag)}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogSearch;
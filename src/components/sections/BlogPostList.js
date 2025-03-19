import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Blog.module.css';

const BlogPostList = ({ posts }) => {
  return (
    <div className={styles.blogGrid}>
      {posts.map(post => (
        <article key={post.id} className={styles.blogPost}>
          <img
            src={post.image}
            alt={post.title}
            className={styles.postImage}
          />
          <div className={styles.postContent}>
            <span className={styles.postDate}>{post.date}</span>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postExcerpt}>{post.excerpt}</p>
            <div className={styles.postTags}>
              {post.tags.map(tag => (
                <span key={tag} className={styles.postTag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogPostList;
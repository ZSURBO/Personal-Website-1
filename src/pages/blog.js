import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Blog.module.css';

// Components
import Header from '../components/layout/Header';
import BlogSearch from '../components/ui/BlogSearch';
import BlogPostList from '../components/sections/BlogPostList';
import SubscribeForm from '../components/ui/SubscribeForm';
import Footer from '../components/layout/Footer';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "如何优化React应用性能",
    excerpt: "本文探讨多种提升React应用性能的策略...",
    date: "2023-03-15",
    tags: ["React", "性能优化", "前端开发"],
    slug: "optimize-react-performance"
  },
  // More blog posts...
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTag, setFilteredTag] = useState('');
  
  // Filter posts based on search term and tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = filteredTag ? post.tags.includes(filteredTag) : true;
    return matchesSearch && matchesTag;
  });
  
  return (
    <div className={styles.container}>
      <Head>
        <title>博客 | Your Name</title>
        <meta name="description" content="浏览我的技术博客和文章" />
      </Head>

      <Header />
      
      <main className={styles.main}>
        <h1 className={styles.title}>博客</h1>
        
        <BlogSearch 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onTagFilter={setFilteredTag}
          currentTag={filteredTag}
        />
        
        <BlogPostList posts={filteredPosts} />
        
        <SubscribeForm />
      </main>

      <Footer />
    </div>
  );
}
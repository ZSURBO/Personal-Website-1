import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  
  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: '首页', path: '/' },
    { name: '关于我', path: '/about' },
    { name: '作品集', path: '/portfolio' },
    { name: '博客', path: '/blog' },
    { name: '联系', path: '/contact' },
  ];
  
  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <h1>YourName</h1>
          </a>
        </Link>
      </div>
      
      <button 
        className={styles.mobileMenuButton}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? 'Close' : 'Menu'}
      </button>
      
      <nav className={`${styles.nav} ${mobileMenuOpen ? styles.open : ''}`}>
        <ul>
          {navLinks.map(link => (
            <li key={link.path}>
              <Link href={link.path}>
                <a className={router.pathname === link.path ? styles.active : ''}>
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className={styles.darkModeToggle}>
        {/* Dark mode toggle component */}
      </div>
    </header>
  );
};

export default Header;
// components/ui/DarkModeToggle.js
import React, { useEffect, useState } from 'react';
import styles from '../../styles/DarkModeToggle.module.css';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    // Check user's preference from localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, []);
  
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Update localStorage and document theme
    localStorage.setItem('darkMode', newDarkMode);
    document.documentElement.setAttribute('data-theme', newDarkMode ? 'dark' : 'light');
  };
  
  return (
    <button 
      className={styles.toggle} 
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
    >
      {darkMode ? '??' : '?'}
    </button>
  );
};

export default DarkModeToggle;
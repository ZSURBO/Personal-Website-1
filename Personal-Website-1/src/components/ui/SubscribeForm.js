import React, { useState } from 'react';
import styles from '../../styles/Blog.module.css';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 这里添加订阅逻辑
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className={styles.subscribeSection}>
      <h2 className={styles.subscribeTitle}>订阅我的博客更新</h2>
      <form className={styles.subscribeForm} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="输入您的邮箱地址"
          className={styles.subscribeInput}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className={styles.subscribeButton}>
          订阅
        </button>
      </form>
      {status === 'success' && (
        <p className={styles.successMessage}>感谢订阅！</p>
      )}
      {status === 'error' && (
        <p className={styles.errorMessage}>订阅失败，请稍后重试。</p>
      )}
    </section>
  );
};

export default SubscribeForm;
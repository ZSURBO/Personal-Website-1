import React from 'react';
import styles from '../../styles/Portfolio.module.css';

const CaseStudy = () => {
  return (
    <section className={styles.caseStudySection}>
      <h2>案例研究</h2>
      <div className={styles.caseStudyContent}>
        <h3>项目名称：电商平台重构</h3>
        <div className={styles.caseDetails}>
          <h4>项目背景</h4>
          <p>
            为提升用户体验和系统性能，对现有电商平台进行全面重构，
            采用最新的技术栈和架构设计。
          </p>

          <h4>技术挑战</h4>
          <ul>
            <li>大规模数据处理和性能优化</li>
            <li>复杂的购物车和订单系统</li>
            <li>实时库存管理</li>
          </ul>

          <h4>解决方案</h4>
          <p>
            采用微服务架构，将系统拆分为多个独立服务。
            使用React和Next.js重构前端，实现服务端渲染和优化性能。
            引入Redis缓存层，提升数据访问速度。
          </p>

          <h4>项目成果</h4>
          <ul>
            <li>页面加载速度提升60%</li>
            <li>用户转化率提升30%</li>
            <li>系统稳定性显著提升</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
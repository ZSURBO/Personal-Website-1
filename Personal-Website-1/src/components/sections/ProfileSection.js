import React from 'react';
import Image from 'next/image';
import styles from '../../styles/About.module.css';

const ProfileSection = () => {
  return (
    <section className={styles.profileSection}>
      <div className={styles.avatar}>
        <Image
          src="/images/avatar.jpg" // 确保在public/images目录下有这张图片
          alt="个人头像"
          width={200}
          height={200}
          objectFit="cover"
        />
      </div>
      <div className={styles.bio}>
        <h2>关于我</h2>
        <p>
          我是一名全栈开发者和设计师，专注于创建优秀的用户体验和高性能的Web应用。
          拥有多年的开发经验，精通前端和后端技术，热衷于将创意转化为现实。
        </p>
        <p>
          在过去的项目中，我参与开发了多个大型Web应用，并负责从设计到部署的完整流程。
          我相信技术应该服务于用户，始终致力于创造简单易用且优雅的解决方案。
        </p>
      </div>
    </section>
  );
};

export default ProfileSection;
import React from 'react';
import styles from './header.module.css';
import ContactBtn from '../contactUsBtn/ContactBtn';

const Header = () => {
  return (
    <div className={styles["navbar"]}>
      <div className={styles["logo"]}>
        <img
          src="/logo/white-ajorchin.svg"
          alt="لوگو"
        />
      </div>
      <div className={styles.menu}>
        <a href="/" className={styles["cube-link"]}>
          <div className={styles["cube"]}>
            <div className={`${styles.face} ${styles.front}`}><p>خانه</p></div>
            <div className={`${styles.face} ${styles.back}`}><p>خانه</p></div>
          </div>
        </a>
        <a href="/#" className={styles["cube-link"]}>
          <div className={styles["cube"]}>
            <div className={`${styles.face} ${styles.front}`}><p>پروژه های ما</p></div>
            <div className={`${styles.face} ${styles.back}`}><p>پروژه های ما</p></div>
          </div>
        </a>
        <a href="#" className={styles["cube-link"]}>
          <div className={styles["cube"]}>
            <div className={`${styles.face} ${styles.front}`}><p>نمونه کارها</p></div>
            <div className={`${styles.face} ${styles.back}`}><p>نمونه کارها</p></div>
          </div>
        </a>
        <a href="/blog" className={styles["cube-link"]}>
          <div className={styles["cube"]}>
            <div className={`${styles.face} ${styles.front}`}><p>خواندنی ها</p></div>
            <div className={`${styles.face} ${styles.back}`}><p>خواندنی ها</p></div>
          </div>
        </a>
        <a href="/about-us" className={styles["cube-link"]}>
          <div className={styles["cube"]}>
            <div className={`${styles.face} ${styles.front}`}><p>درباره ما</p></div>
            <div className={`${styles.face} ${styles.back}`}><p>درباره ما</p></div>
          </div>
        </a>
        <a href="/contact-us" className={styles["cube-link"]}>
          <div className={styles["cube"]}>
            <div className={`${styles.face} ${styles.front}`}><p>تماس با ما</p></div>
            <div className={`${styles.face} ${styles.back}`}><p>تماس با ما</p></div>
          </div>
        </a>
      </div>
      <div className={styles["contact-us"]}>
       <ContactBtn/>
      </div>
    </div>
  );
}

export default Header;

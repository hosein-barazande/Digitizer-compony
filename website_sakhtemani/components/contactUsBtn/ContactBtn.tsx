import React from 'react';
import styles from './contactbtn.module.css';

type ContactBtnProps = {
  text?: string;
  href?: string; 
};

const ContactBtn = ({ text = 'شماره تماس: 09912150416', href = 'tel:09912150416' }: ContactBtnProps) => {
  return (
    <div className={styles.btnContainer}>
      <a href={href} className={styles.btnCuboid}>
        <div className={`${styles.faceBtn} ${styles.frontBtn}`}>
          <p>{text}</p>
        </div>
        <div className={`${styles.faceBtn} ${styles.leftBtn}`}>
          <p>{text}</p>
        </div>
      </a>
    </div>
  );
};

export default ContactBtn;

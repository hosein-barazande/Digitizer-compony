import React from 'react'
import styles from './footer.module.css';
const Footer = () => {
  return (
    <>
    <section className= {styles.footer}>
      <div className={styles.logoContaner}>
         <img
          src="/logo/white-ajorchin.svg" 
          alt="لوگو آجر چین " />
      </div>
    </section>
    </>
  )
}

export default Footer
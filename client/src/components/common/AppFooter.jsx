import React from 'react'
import styles from './AppFooter.module.css'

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <a href="https://github.com/itsRajatt" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/rajat-thakur-ab68111b9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="/about">About</a>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Created by Rajat Thakur.
      </div>
    </footer>
  )
}

export default AppFooter
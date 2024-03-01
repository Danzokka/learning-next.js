import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Danzokka</div>
      <div className={styles.text}>
        Danzokka © All rights not deserved.
      </div>
    </div>
  )
}

export default Footer
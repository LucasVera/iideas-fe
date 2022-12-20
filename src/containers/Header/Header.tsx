import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import UserNav from './UserNav/UserNav'

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Link to='/'>Home</Link>
      </div>
      <div className={styles.rightContainer}>
        <UserNav />
      </div>
    </div>
  )
}

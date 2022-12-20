import React, { useState } from 'react'
import { RiArrowDownSLine, RiArrowDropDownFill, RiArrowDropDownLine, RiArrowUpSFill, RiArrowUpSLine, RiUser3Fill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../common/hooks/useAuth'
import { logMessage } from '../../../common/util/logger'
import Dropdown from '../../../components/Dropdown/Dropdown'
import styles from './UserNav.module.css'

export default function UserNav() {
  const { user, logout } = useAuth()

  const navigate = useNavigate()
  if (!user?.email) navigate('/login')

  const onLogoutClick = async () => {
    await logout()
    logMessage('Log out done')
  }

  const {
    email,
  } = user

  return (
    <div className={styles.container}>
      <Dropdown
        items={[
          { display: 'Logout', onClick: onLogoutClick },
        ]}
      >
        <RiUser3Fill className={styles.userIcon} size="1.2rem" />
        <span className={styles.emailText}>{email}</span>
      </Dropdown>
    </div>
  )
}

import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../../common/hooks/useAuth'

interface AuthGuardProps {
  children: ReactNode,
}

export default function AuthGuard(props: AuthGuardProps) {
  const {
    children,
  } = props

  const { user, isFetchingAuth } = useAuth()

  if (isFetchingAuth) return <p>Loading...</p>

  if (!user?.email) return <Navigate to='/login' />

  return <>{children}</>
}


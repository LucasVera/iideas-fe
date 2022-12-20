import React, { ReactNode } from 'react'
import AuthGuard from '../../components/AuthGuard/AuthGuard'
import Header from '../Header/Header'

interface LayoutProps {
  children?: ReactNode
}

export default function Layout(props: LayoutProps) {
  const {
    children
  } = props
  return (
    <div>
      <AuthGuard>
        <Header />
        {children}
      </AuthGuard>
    </div>
  )
}

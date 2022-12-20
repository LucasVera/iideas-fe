import React, { ReactNode } from 'react'
import styles from './Button.module.css'

export enum ButtonColorVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

export enum ButtonSizeVariants {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface ButtonProps {
  children: ReactNode
  onClick: () => void
  colorVariant?: ButtonColorVariants
  sizeVariant?: ButtonSizeVariants
  style?: object
  className?: string
}

const colorVariantClass = (variant: ButtonColorVariants): string => {
  if (variant === ButtonColorVariants.SECONDARY) return `${styles.bgSecondary} ${styles.lightText}`
  if (variant === ButtonColorVariants.TERTIARY) return `${styles.bgTertiary} ${styles.darkText}`

  // default: primary
  return `${styles.bgPrimary} ${styles.lightText}`
}

const sizeVariantClass = (variant: ButtonSizeVariants): string => {
  if (variant === ButtonSizeVariants.SMALL) return styles.btnSmall
  if (variant === ButtonSizeVariants.LARGE) return styles.btnLarge

  // default: medium
  return styles.btnMedium
}

export default function Button(props: ButtonProps) {
  const {
    children,
    onClick,
    colorVariant = ButtonColorVariants.PRIMARY,
    sizeVariant = ButtonSizeVariants.MEDIUM,
    style = {},
    className = '',
  } = props

  const btnClassName = `
    ${className}
    ${styles.btn}
    ${colorVariantClass(colorVariant)}
    ${sizeVariantClass(sizeVariant)}
  `

  return (
    <button
      className={btnClassName}
      style={style || {}}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

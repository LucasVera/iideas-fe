import React, { ReactNode, useState } from 'react'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import DropdownItem, { DropdownItemProps } from './DropdownItem'
import styles from './Dropdown.module.css'

interface DropdownProps {
  items: DropdownItemProps[],
  className?: string
  children: ReactNode
}

export default function Dropdown(props: DropdownProps) {
  const {
    items,
    className,
    children,
  } = props

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={className}>
      <div className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.header}>
          {children}
          {isOpen
            ? <RiArrowUpSLine className={styles.caretIcon} size="1.5rem" />
            : <RiArrowDownSLine className={styles.caretIcon} size="1.5rem" />
          }
        </div>
        <div className={styles.body}>
          {
            isOpen && items?.length > 0
              ? items.map(item => (
                <DropdownItem
                  key={item.display}
                  display={item.display}
                  onClick={item.onClick}
                />
              ))
              : <></>
          }
        </div>
      </div>

    </div >
  )
}

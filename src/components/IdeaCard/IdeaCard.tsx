import React from 'react'
import { RiDeleteBinFill, RiPencilFill } from 'react-icons/ri'
import Idea from '../../common/types/Idea/Idea'
import { logMessage } from '../../common/util/logger'
import Button, { ButtonSizeVariants } from '../Button/Button'
import IdeaTypeIcon from '../IdeaTypeIcon/IdeaTypeIcon'
import styles from './IdeaCard.module.css'

export interface IdeaCardProps {
  idea: Idea
  className?: string
}

export default function IdeaCard(props: IdeaCardProps) {
  const {
    idea,
    className = '',
  } = props

  const {
    id,
    description,
    subject,
    type,
  } = idea

  const shortDescription = description.length > 80 ? `${description.slice(0, 77)}...` : description

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.headerContainer}>
        <span className={styles.subjectText}>{subject}</span>
        <span className={styles.idText}>{id}</span>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.leftBodyContainer}>
          <IdeaTypeIcon idea={idea} size='7rem' />
          <p className={styles.typeText}>{type}</p>
        </div>
        <div className={styles.rightBodyContainer}>
          <p>{shortDescription}</p>
          <div className={styles.actionButtonsContainer}>
            <Button
              className={styles.actionButton}
              onClick={() => logMessage('delete this idea', idea)}
              sizeVariant={ButtonSizeVariants.MEDIUM}
            >
              <RiDeleteBinFill size={'1.5rem'} />
            </Button>
            <Button
              className={styles.actionButton}
              onClick={() => logMessage('update this idea', idea)}
              sizeVariant={ButtonSizeVariants.MEDIUM}
            >
              <RiPencilFill size={'1.5rem'} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

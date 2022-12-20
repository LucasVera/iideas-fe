import React, { useEffect, useState } from 'react'
import useAuth from '../../common/hooks/useAuth'
import IdeasService from '../../common/services/IdeasService'
import Idea from '../../common/types/Idea/Idea'
import { logMessage } from '../../common/util/logger'
import IdeaCard from '../../components/IdeaCard/IdeaCard'
import styles from './Home.module.css'

export default function Home() {
  const [ideas, setIdeas] = useState([] as Idea[])
  const [isFetchingIdeas, setIsFetchingIdeas] = useState(false)
  const { user } = useAuth()

  const queryIdeas = async () => {
    if (!user?.email) return
    try {
      setIsFetchingIdeas(true)
      const ideas = await IdeasService.getIdeas(user)
      setIdeas(ideas);
      setIsFetchingIdeas(false)
    } catch (ex) {
      logMessage('Error querying ideas', ex)
    }
  }

  const renderIdeas = () => {
    if (!ideas || ideas.length <= 0) return (<p>No ideas found...</p>)

    return <div className={styles.ideasListContainer}>
      {ideas.map(idea => (
        <IdeaCard
          key={idea.id}
          idea={idea}
        />
      ))}
    </div>
  }

  useEffect(() => {
    console.log('fetching ideas')
    queryIdeas()
  }, [user.email])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to your iideass</h1>
      <p>Here you can see the iideass you have created. You can filter using the searchbar</p>
      {isFetchingIdeas
        ? <p>Loading your ideas...</p>
        : renderIdeas()
      }
      { }
    </div>
  )
}

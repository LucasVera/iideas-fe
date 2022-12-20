import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth"
import { Auth } from "aws-amplify"
import useAuth from "../../common/hooks/useAuth"
import Button, { ButtonColorVariants, ButtonSizeVariants } from "../../components/Button/Button"
import styles from './Login.module.css'
import { SiGoogle } from 'react-icons/si'
import { Navigate } from "react-router-dom"

export default function Login() {
  const { user, isFetchingAuth } = useAuth()

  if (isFetchingAuth) return (
    <p>Loading...</p>
  )

  if (user?.email) return <Navigate to='/' />

  return (
    <div className={styles.container}>
      <div className={styles.boxContainer}>
        <p className={styles.title}>Welcome to iideass</p>
        <p className={styles.text}>A place to save and share your ideas, thoughts, projects and anything else that you can think of!</p>
        <p className={styles.text}>To continue, please sign in with a Google account</p>
        <p></p>
        <Button
          className={styles.signInButton}
          colorVariant={ButtonColorVariants.PRIMARY}
          sizeVariant={ButtonSizeVariants.LARGE}
          onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })}
        >
          <SiGoogle className={styles.googleIcon} size="1.9rem" />
          Sign in with Google
        </Button>
      </div>
    </div>
  )
}

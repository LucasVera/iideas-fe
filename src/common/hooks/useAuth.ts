import { useEffect, useState } from "react";
import { Auth, Hub } from 'aws-amplify'
import { logMessage } from "../util/logger";
import User from "../types/User/UserModel";
import { cognitoUserToUser } from "../types/User/CognitoUser";

export default function useAuth() {
  const [user, setUser] = useState({} as User)
  const [isFetchingAuth, setIsFetchingAuth] = useState(true)

  const getCurrentUser = async () => {
    setIsFetchingAuth(true)
    try {
      const cognitoUser = await Auth.currentAuthenticatedUser()
      setUser(cognitoUserToUser(cognitoUser))
    } catch (ex) {
      setUser({} as User)
      // logMessage('Error getting current user', ex)
    }
    setIsFetchingAuth(false)
  }

  const logout = () => Auth.signOut()

  useEffect(() => {
    const unsubscribe = Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          setUser(cognitoUserToUser(data))
          break;
        case 'signOut':
          setUser({} as User)
          break;
        case 'customOAuthState':
          logMessage('custom oauth state', data)
          break;
        default:
          logMessage('unknow event', event)
      }
    });

    getCurrentUser()

    return unsubscribe
  }, [])

  return { user, isFetchingAuth, logout }
}

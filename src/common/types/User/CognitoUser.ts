import User, { AuthProvider } from "./UserModel";

interface CognitoUserIdentity {
  userId: number
  providerName: string
  providerType: string
  issuer: object | null
  primary: boolean
  dateCreated: number
}

export const cognitoUserToUser = (cognitoUserRef: any): User => ({
  email: cognitoUserRef?.attributes?.email,
  authProvider: getCognitoAuthProvider(cognitoUserRef),
  createdAtTimestamp: getCognitoUserIdentity(cognitoUserRef).dateCreated,
  externalUserRef: cognitoUserRef,
})

const getCognitoUserIdentity = (cognitoUser: any): CognitoUserIdentity => JSON
  .parse(cognitoUser?.attributes?.identities ?? '[]')[0]

const getCognitoAuthProvider = (cognitoUser: any): AuthProvider => {
  if (!cognitoUser?.attributes?.identities) return AuthProvider.UNKNOWN

  const providers = [
    { cognitoProviderType: 'Google', authProvider: AuthProvider.GOOGLE }
  ]

  const identity = getCognitoUserIdentity(cognitoUser)

  return providers.find(p => p.cognitoProviderType === identity.providerType)?.authProvider ?? AuthProvider.UNKNOWN
}

export default class User {
  email: string
  createdAtTimestamp: number
  authProvider: AuthProvider
  externalUserRef: any

  constructor(
    email: string,
    createdAtTimestamp: number,
    authProvider: AuthProvider,
    externalUserRef: any,
  ) {
    this.email = email
    this.createdAtTimestamp = createdAtTimestamp
    this.authProvider = authProvider
    this.externalUserRef = externalUserRef
  }
}

export enum AuthProvider {
  UNKNOWN = 'unknown',
  GOOGLE = 'google',
}


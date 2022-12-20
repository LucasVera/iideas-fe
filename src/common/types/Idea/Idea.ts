export default class Idea {
  id: number
  subject: string
  description: string
  type: IdeaTypes
  email: string
  createdAt: number
  deletedAt?: number

  constructor(
    id: number,
    subject: string,
    description: string,
    type: IdeaTypes,
    email: string,
    createdAt: number,
    deletedAt?: number
  ) {
    this.id = id
    this.subject = subject
    this.description = description
    this.type = type
    this.email = email
    this.createdAt = createdAt
    this.deletedAt = deletedAt
  }
}

export enum IdeaTypes {
  STORY = 'Story',
  APP = 'App',
  DISH = 'Dish',
  NON_TECH_PROJECT = 'Non tech project',
  VACATION_TRIP = 'Vacation trip',
  OTHER = 'Other'
}

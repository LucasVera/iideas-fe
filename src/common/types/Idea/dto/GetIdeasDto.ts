import { IdeaTypes } from "../Idea"

export type GetIdeasDataResponse = {
  count: number
  ideas: GetIdeaDto[]
}

export type GetIdeaDto = {
  id: number
  email: string
  subject: string
  description: string
  ideaType: IdeaTypes
  createdAt: number
  updatedAt: number
  deletedAt?: number
}

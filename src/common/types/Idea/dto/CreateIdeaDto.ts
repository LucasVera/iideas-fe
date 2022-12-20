import { IdeaTypes } from "../Idea"
import { GetIdeaDto } from "./GetIdeasDto"

export type CreateIdeaBodyDto = {
  email: string
  subject: string
  description: string
  ideaType: IdeaTypes
}

export type CreateIdeaDataResponse = {
  idea: GetIdeaDto
}

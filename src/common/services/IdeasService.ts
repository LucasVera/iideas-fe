import ApiResponse from "../types/ApiResponse"
import { CreateIdeaBodyDto, CreateIdeaDataResponse } from "../types/Idea/dto/CreateIdeaDto"
import { GetIdeaDto, GetIdeasDataResponse } from "../types/Idea/dto/GetIdeasDto"
import Idea, { IdeaTypes } from "../types/Idea/Idea"
import User from "../types/User/UserModel"
import api from "../util/api"
import { logMessage } from "../util/logger"

const getIdeas = async (user: User): Promise<Idea[]> => {
  try {
    const getIdeasRoute = `/ideas?email=${user.email}`
    const apiResponse = await api.get<ApiResponse<GetIdeasDataResponse>>(getIdeasRoute)
    const { data: { ideas: ideaDtos } } = apiResponse

    return ideaDtos.map(dto => ideaDtoToIdea(dto))
  } catch (ex) {
    logMessage('Error getting ideas', ex)
    throw ex
  }
}

const createIdea = async (
  email: string,
  subject: string,
  description: string,
  ideaType = IdeaTypes.OTHER
): Promise<Idea> => {
  // (TODO): validate required props
  const body: CreateIdeaBodyDto = {
    email,
    subject,
    description,
    ideaType
  }
  try {
    const apiResponse = await api.post<ApiResponse<CreateIdeaDataResponse>>('/idea', body)
    const { data: { idea: ideaDto } } = apiResponse

    return ideaDtoToIdea(ideaDto)
  } catch (ex) {
    logMessage('Error creating idea', body, ex)
    throw ex
  }
}

const ideaDtoToIdea = (dto: GetIdeaDto): Idea => ({
  id: dto.id,
  createdAt: dto.createdAt,
  email: dto.email,
  deletedAt: dto.deletedAt,
  description: dto.description,
  subject: dto.subject,
  type: dto.ideaType,
})

export default {
  getIdeas,
  createIdea,
}

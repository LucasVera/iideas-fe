import React, { Component, ReactElement, ReactNode } from 'react'
import {
  RiDraftFill,
  RiLeafFill,
  RiLightbulbFill,
  RiPlaneFill,
  RiRestaurantFill,
  RiSmartphoneFill
} from 'react-icons/ri'
import Idea, { IdeaTypes } from '../../common/types/Idea/Idea'

interface IdeaTypeIconProps {
  idea: Idea,
  size?: string,
}
export default function IdeaTypeIcon(props: IdeaTypeIconProps) {
  const {
    idea,
    size = '30px',
  } = props

  if (!idea || !idea.type) return <></>

  const ideaIcons = [
    { type: IdeaTypes.VACATION_TRIP, icon: RiPlaneFill },
    { type: IdeaTypes.STORY, icon: RiDraftFill },
    { type: IdeaTypes.NON_TECH_PROJECT, icon: RiLeafFill },
    { type: IdeaTypes.DISH, icon: RiRestaurantFill },
    { type: IdeaTypes.OTHER, icon: RiLightbulbFill },
    { type: IdeaTypes.APP, icon: RiSmartphoneFill },
  ]
  const defaultIcon = RiLightbulbFill
  const icon = ideaIcons.find(({ type }) => type === idea.type)?.icon ?? defaultIcon

  return (<span>{icon({ size })}</span>)
}

import React from 'react'
import { StyledBadge } from './StyledBadge'
import { ComponentProps, StyledProps } from '../../typeHelpers'

export type BaseBadgeProps = {
  color: string
}

type BadgeProps = ComponentProps<BaseBadgeProps, 'span', 'color'>

export const Badge: React.FC<StyledProps<BadgeProps, 'span'>> = (props) => {
  return <StyledBadge {...props}>{props.children}</StyledBadge>
}

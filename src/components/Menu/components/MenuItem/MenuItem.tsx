import React from 'react'
import { StyledMenuItem } from './StyledMenuItem'

export type MenuItemProps = {
  invertColors: boolean
  onClick: () => void
  clean: boolean
  color: string
  link: boolean
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  return <StyledMenuItem {...props}>{props.children}</StyledMenuItem>
}

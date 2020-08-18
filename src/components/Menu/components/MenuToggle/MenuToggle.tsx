import React from 'react'
import { StyledMenuToggle } from './StyledMenuToggle'

export type MenuToggleProps = {
  invertColors: boolean
  onClick: () => void
  isOpen: boolean
  clean: boolean
  color: string
  link: boolean
  disabled: boolean
}

export const MenuToggle: React.FC<MenuToggleProps> = (props) => {
  return <StyledMenuToggle {...props} />
}

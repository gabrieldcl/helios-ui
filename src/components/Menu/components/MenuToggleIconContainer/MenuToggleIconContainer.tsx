import React from 'react'
import { StyledMenuToggleIconContainer } from './StyledMenuToggleIconContainer'

export type MenuToggleIconContainerProps = {
  invertIcon?: boolean
}

export const MenuToggleIconContainer: React.FC<MenuToggleIconContainerProps> = (
  props
) => {
  return (
    <StyledMenuToggleIconContainer {...props}>
      {props.children}
    </StyledMenuToggleIconContainer>
  )
}

import React from 'react'
import { StyledDropToggle } from './StyledDropToggle'

export type DropToggleProps = {
  onClick: () => void
  isOpen: boolean
  color: string
}

export const DropToggle: React.FC<DropToggleProps> = (props) => {
  return <StyledDropToggle {...props} />
}

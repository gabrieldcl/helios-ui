import React, { ReactNode, MouseEvent } from 'react'
import { StyledOption } from './StyledOption'

export type OptionProps = {
  onClick?: (event: MouseEvent) => void
  children: ReactNode
  padding: string
  key: string | number
}

export const Option: React.FC<OptionProps> = (props) => {
  return <StyledOption {...props}>{props.children}</StyledOption>
}

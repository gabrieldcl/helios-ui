import React, { memo } from 'react'
import { StyledDivider } from './StyledDivider'
import { CSSObject } from 'styled-components'

export interface DividerProps {
  style?: CSSObject
  vertical?: boolean
}

const DEFAULT_PROPS: Required<DividerProps> = {
  style: {},
  vertical: false
}

// TODO add color prop and move styles to theme
const DividerComponent: React.FC<DividerProps> = (props) => {
  return <StyledDivider {...DEFAULT_PROPS} {...props} />
}

export const Divider = memo(DividerComponent)

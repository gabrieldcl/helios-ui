import React, { memo, ReactNode } from 'react'
import { StyledGrid } from './StyledGrid'
import { PickDefaultProps } from '../../typeHelpers'
import { CSSObject } from 'styled-components'

export interface GridProps {
  style?: CSSObject
  columns: string | number
  rows?: string | number
  rowHeight?: string
  margin?: string
  gap?: string
  justifyContent?: string
  alignContent?: string
  columnGap?: string
  rowGap?: string
  children: ReactNode
}

const DEFAULT_PROPS: PickDefaultProps<GridProps> = {
  style: {},
  rows: '',
  rowHeight: '',
  margin: '',
  gap: '',
  justifyContent: '',
  alignContent: '',
  columnGap: '',
  rowGap: ''
}

const GridComponent: React.FC<GridProps> = (props) => {
  return (
    <StyledGrid {...DEFAULT_PROPS} {...props}>
      {props.children}
    </StyledGrid>
  )
}

export const Grid = memo(GridComponent)

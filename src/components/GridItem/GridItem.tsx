import React, { memo, ReactNode } from 'react'
import { StyledGridItem } from './StyledGridItem'
import { PickDefaultProps } from '../../typeHelpers'
import { CSSObject } from 'styled-components'

export interface GridItemProps {
  style?: CSSObject
  gridColumn?: string
  gridRow?: string
  padding?: string
  justifyContent?: string
  bg?: string
  color?: string
  children: ReactNode
}

const DEFAULT_PROPS: PickDefaultProps<GridItemProps> = {
  style: {},
  gridColumn: '',
  gridRow: '',
  padding: '',
  justifyContent: '',
  bg: '',
  color: ''
}

const GridItemComponent: React.FC<GridItemProps> = (props) => {
  return (
    <StyledGridItem {...DEFAULT_PROPS} {...props}>
      {props.children}
    </StyledGridItem>
  )
}

export const GridItem = memo(GridItemComponent)

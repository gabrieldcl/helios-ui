import React, { ReactNode } from 'react'
import { StyledTableHeading } from './StyledTableHeading'
import { PickDefaultProps } from '../../typeHelpers'
import { CSSObject } from 'styled-components'

export interface TableHeadingProps {
  style?: CSSObject
  children: ReactNode
}

const DEFAULT_PROPS: PickDefaultProps<TableHeadingProps> = {
  style: {}
}

// TODO: add Wrapper for children
export const TableHeading: React.FC<TableHeadingProps> = (props) => {
  return (
    <StyledTableHeading {...DEFAULT_PROPS} {...props}>
      {props.children}
    </StyledTableHeading>
  )
}

import React, { ReactNode } from 'react'
import { StyledTableHead } from './StyledTableHead'
import { PickDefaultProps } from '../../typeHelpers'
import { CSSObject } from 'styled-components'

export interface TableHeadProps {
  style?: CSSObject
  children: ReactNode
}

const DEFAULT_PROPS: PickDefaultProps<TableHeadProps> = {
  style: {}
}

export const TableHead: React.FC<TableHeadProps> = (props) => {
  return (
    <StyledTableHead {...DEFAULT_PROPS} {...props}>
      {props.children}
    </StyledTableHead>
  )
}

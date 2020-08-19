import React from 'react'
import { StyledTableBody } from './StyledTableBody'
import { CSSObject } from 'styled-components'

export interface TableBodyProps {
  style?: CSSObject
  strip?: boolean
}

const DEFAULT_PROPS: Required<TableBodyProps> = {
  style: {},
  strip: false
}

export const TableBody: React.FC<TableBodyProps> = (props) => {
  return (
    <StyledTableBody {...DEFAULT_PROPS} {...props}>
      {props.children}
    </StyledTableBody>
  )
}

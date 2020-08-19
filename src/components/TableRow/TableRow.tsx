import React, { ReactNode } from 'react'
import { StyledTableRow } from './StyledTableRow'
import { PickDefaultProps } from '../../typeHelpers'
import { CSSObject } from 'styled-components'

export interface TableRowProps {
  style?: CSSObject
  children: ReactNode
}

const DEFAULT_PROPS: PickDefaultProps<TableRowProps> = {
  style: {}
}

export const TableRow: React.FC<TableRowProps> = (props) => {
  return (
    <StyledTableRow {...DEFAULT_PROPS} {...props}>
      {props.children}
    </StyledTableRow>
  )
}

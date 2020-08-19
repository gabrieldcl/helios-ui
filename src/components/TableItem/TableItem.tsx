import React, { memo, ReactNode } from 'react'
import { StyledTableItem } from './StyledTableItem'
import { PickDefaultProps } from '../../typeHelpers'
import { CSSObject } from 'styled-components'

export interface TableItemProps {
  style?: CSSObject
  children: ReactNode
}

const DEFAULT_PROPS: PickDefaultProps<TableItemProps> = {
  style: {}
}

const TableItemComponent: React.FC<TableItemProps> = (props) => {
  return (
    <StyledTableItem {...DEFAULT_PROPS} {...props}>
      {props.children}
    </StyledTableItem>
  )
}

export const TableItem = memo(TableItemComponent)

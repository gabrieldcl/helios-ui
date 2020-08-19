import React, { memo, ReactNode } from 'react'
import { StyledTable } from './StyledTable'
import { PickDefaultProps } from '../../typeHelpers'
import { CSSObject } from 'styled-components'

export interface TableProps {
  style?: CSSObject
  children: ReactNode
}

const DEFAULT_PROPS: PickDefaultProps<TableProps> = {
  style: {}
}

const TableComponent: React.FC<TableProps> = (props) => {
  return (
    <StyledTable {...DEFAULT_PROPS} {...props}>
      <table
        style={{ borderCollapse: 'collapse', width: '100%', margin: '0px' }}
      >
        {props.children}
      </table>
    </StyledTable>
  )
}

export const Table = memo(TableComponent)

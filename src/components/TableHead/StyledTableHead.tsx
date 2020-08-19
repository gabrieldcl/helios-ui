import styled, { css } from 'styled-components'
import { ThemedProps } from '../../theme'
import { TableHeadProps } from './TableHead'

export type StyledTableHeadProps = Required<TableHeadProps>
export type ThemedStyledTableHeadProps = ThemedProps<StyledTableHeadProps>

const borderStyle = (props: ThemedStyledTableHeadProps) => css`
  border: ${typeof props.theme.tableHead.border === 'string' &&
  props.theme.tableHead.border};
  border-bottom: ${typeof props.theme.tableHead.border === 'string'
    ? null
    : props.theme.tableHead.border.bottom};
  border-top: ${typeof props.theme.tableHead.border === 'string'
    ? null
    : props.theme.tableHead.border.top};
  border-left: ${typeof props.theme.tableHead.border === 'string'
    ? null
    : props.theme.tableHead.border.left};
  border-right: ${typeof props.theme.tableHead.border === 'string'
    ? null
    : props.theme.tableHead.border.right};
`

export const StyledTableHead = styled.thead`
  ${borderStyle}
`

import styled, { css } from 'styled-components'
import { ThemedProps } from '../../theme'
import { TableBodyProps } from './TableBody'

export type StyledTableBodyProps = Required<TableBodyProps>
export type ThemedStyledTableBodyProps = ThemedProps<TableBodyProps>

// TODO: move nth-child to theme
const stripStyle = (props: ThemedStyledTableBodyProps) => css`
  background-color: ${props.theme.table.backgroundColor};
  tr:nth-child(odd) {
    background-color: ${props.theme.tableBody.stripColor};
  }
`

export const StyledTableBody = styled.tbody`
  ${(props: ThemedStyledTableBodyProps) => props.strip && stripStyle(props)}
`

import styled from 'styled-components'
import { ThemedProps } from '../../theme'
import { TableRowProps } from './TableRow'

export type StyledTableRowProps = Required<TableRowProps>
export type ThemedStyledTableRowProps = ThemedProps<StyledTableRowProps>

export const StyledTableRow = styled.tr`
  height: ${(props: ThemedStyledTableRowProps) => props.theme.tableRow.height};
`

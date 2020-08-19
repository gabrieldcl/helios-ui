import styled, { css } from 'styled-components'
import { ThemedProps } from '../../theme'
import { TableItemProps } from './TableItem'

export type StyledTableItemProps = Required<TableItemProps>
export type ThemedStyledTableItemProps = ThemedProps<StyledTableItemProps>

const borderStyle = (props: ThemedStyledTableItemProps) => css`
  border-width: ${props.theme.tableItem.border.width};
  border-color: ${props.theme.tableItem.border.color};
  border-style: ${props.theme.tableItem.border.style};
  border-radius: ${props.theme.tableItem.border.radius};
`

const paddingStyle = (props: ThemedStyledTableItemProps) => css`
  padding: ${typeof props.theme.tableItem.padding === 'string' &&
  props.theme.tableItem.padding};
  padding-left: ${typeof props.theme.tableItem.padding === 'string'
    ? null
    : props.theme.tableItem.padding.left};
  padding-top: ${typeof props.theme.tableItem.padding === 'string'
    ? null
    : props.theme.tableItem.padding.top};
  padding-right: ${typeof props.theme.tableItem.padding === 'string'
    ? null
    : props.theme.tableItem.padding.right};
  padding-bottom: ${typeof props.theme.tableItem.padding === 'string'
    ? null
    : props.theme.tableItem.padding.bottom};
`

export const StyledTableItem = styled.td`
  ${paddingStyle}
  ${borderStyle}

  text-align: ${(props: ThemedStyledTableItemProps) =>
    props.theme.tableItem.textAlign};
  color: ${(props: ThemedStyledTableItemProps) => props.theme.tableItem.color};
`

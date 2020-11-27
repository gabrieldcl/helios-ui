import styled, { css } from 'styled-components'
import { ThemedProps } from '../../themeTypes'
import { TableProps } from './Table'

export type StyledTableProps = Required<TableProps>
export type ThemedStyledTableProps = ThemedProps<StyledTableProps>

const borderStyle = (props: ThemedStyledTableProps) => css`
  border: ${props.theme.table.border.width} ${props.theme.table.border.style}
    ${props.theme.table.border.color};
  border-radius: ${props.theme.table.border.radius};
`

const marginStyle = (props: ThemedStyledTableProps) => css`
  margin: ${typeof props.theme.table.margin === 'string' &&
  props.theme.table.margin};
  margin-left: ${typeof props.theme.table.margin === 'string'
    ? null
    : props.theme.table.margin.left};
  margin-top: ${typeof props.theme.table.margin === 'string'
    ? null
    : props.theme.table.margin.top};
  margin-right: ${typeof props.theme.table.margin === 'string'
    ? null
    : props.theme.table.margin.right};
  margin-bottom: ${typeof props.theme.table.margin === 'string'
    ? null
    : props.theme.table.margin.bottom};
`

const shadowStyle = (props: ThemedStyledTableProps) => css`
  box-shadow: ${props.theme.table.shadow};
`

const backgroundStyle = (props: ThemedStyledTableProps) => css`
  background-color: ${props.theme.table.backgroundColor};
`

export const StyledTable = styled.div`
  ${marginStyle}
  ${borderStyle}
  ${shadowStyle}
  ${backgroundStyle}
`

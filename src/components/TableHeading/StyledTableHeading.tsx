import styled, { css } from 'styled-components'
import { ThemedProps } from '../../theme'
import { TableHeadingProps } from './TableHeading'

export type StyledTableHeadingProps = Required<TableHeadingProps>
export type ThemedStyledTableHeadingProps = ThemedProps<StyledTableHeadingProps>

const borderStyle = (props: ThemedStyledTableHeadingProps) => css`
  border-width: ${props.theme.tableHeading.border.width};
  border-color: ${props.theme.tableHeading.border.color};
  border-style: ${props.theme.tableHeading.border.style};
  border-radius: ${props.theme.tableHeading.border.radius};
`

const paddingStyle = (props: ThemedStyledTableHeadingProps) => css`
  padding: ${typeof props.theme.tableHeading.padding === 'string' &&
  props.theme.tableHeading.padding};
  padding-left: ${typeof props.theme.tableHeading.padding === 'string'
    ? null
    : props.theme.tableHeading.padding.left};
  padding-top: ${typeof props.theme.tableHeading.padding === 'string'
    ? null
    : props.theme.tableHeading.padding.top};
  padding-right: ${typeof props.theme.tableHeading.padding === 'string'
    ? null
    : props.theme.tableHeading.padding.right};
  padding-bottom: ${typeof props.theme.tableHeading.padding === 'string'
    ? null
    : props.theme.tableHeading.padding.bottom};
`

const textStyle = (props: ThemedStyledTableHeadingProps) => css`
  text-align: ${props.theme.tableHeading.textAlign};
  color: ${props.theme.tableHeading.color};
  font-weight: ${props.theme.tableHeading.weight};
`

export const StyledTableHeading = styled.th`
  ${paddingStyle}
  ${borderStyle}
  ${textStyle}
`

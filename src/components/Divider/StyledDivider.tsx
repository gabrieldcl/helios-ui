import styled, { css } from 'styled-components'
import { ThemedProps } from '../../theme'
import { DividerProps } from './Divider'

export type StyledDividerProps = Required<DividerProps>
export type ThemeStyledDividerProps = ThemedProps<StyledDividerProps>

const borderStyle = (props: ThemeStyledDividerProps) => css`
  border-top: ${props.theme.divider.border.color}
    ${props.theme.divider.border.width} ${props.theme.divider.border.style};
  border-radius: ${props.theme.divider.border.radius};
`

const dividerOrientation = (props: ThemeStyledDividerProps) => {
  if (props.vertical) {
    return css`
      border-left: ${props.theme.divider.vertical.border.color}
        ${props.theme.divider.vertical.border.width}
        ${props.theme.divider.vertical.border.style};
      height: ${props.theme.divider.vertical.height};
      align-items: 'center';
    `
  }
  return borderStyle(props)
}

export const StyledDivider = styled.div<StyledDividerProps>`
  ${(props) => dividerOrientation(props)};
`

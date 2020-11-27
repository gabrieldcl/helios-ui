import styled, { css } from 'styled-components'
import { ThemedProps } from '../../../themeTypes'

type IconContainerProps = {
  invert: boolean
}

type ThemeIconContainerProps = ThemedProps<IconContainerProps>

const marginRightStyle = (props: ThemeIconContainerProps) => css`
  margin-right: ${props.theme.button.iconMargin};
`

const marginLeftStyle = (props: ThemeIconContainerProps) => css`
  margin-left: ${props.theme.button.iconMargin};
`

export const IconContainer = styled.span<ThemeIconContainerProps>`
  ${(props: ThemeIconContainerProps) =>
    props.invert ? marginLeftStyle(props) : marginRightStyle(props)}
`

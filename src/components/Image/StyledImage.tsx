import styled, { css } from 'styled-components'
import { ImageProps } from './Image'
import { ThemedProps } from '../../themeTypes'

type ThemedStyledImageProps = ThemedProps<ImageProps>

const marginStyle = (props: ThemedStyledImageProps) => css`
  margin-bottom: ${props.theme.image.margin.bottom};
  margin-left: ${props.theme.image.margin.left};
  margin-top: ${props.theme.image.margin.top};
  margin-right: ${props.theme.image.margin.right};
`

const borderStyle = (props: ThemedStyledImageProps) => css`
  border-bottom-width: ${props.theme.image.border.borderBottomWidth};
  border-top-width: ${props.theme.image.border.borderTopWidth};
  border-left-width: ${props.theme.image.border.borderLeftWidth};
  border-right-width: ${props.theme.image.border.borderRightWidth};
  border-color: ${props.theme.image.border.borderColor};
  border-radius: ${props.theme.image.border.borderRadius};
  border-style: ${props.theme.image.border.borderStyle};
`

export const StyledImage = styled.img<ImageProps>`
  align-self: ${(props) => props.alignSelf};
  opacity: ${(props) => props.opacity};
  height: ${(props) => props.height};
  ${marginStyle}
  ${borderStyle}
`

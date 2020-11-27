import styled, { css } from 'styled-components'
import { AnchorProps } from './Anchor'
import { ThemedProps } from '../../themeTypes'

type ThemedStyledAnchorProps = ThemedProps<AnchorProps>

const getColor = (props: ThemedStyledAnchorProps) => {
  if (props.color) {
    return props.theme.colors[props.color]
  }
  return ''
}

const colorStyle = (props: ThemedStyledAnchorProps) => css`
  color: ${getColor(props)};
`

const sizeStyle = (props: ThemedStyledAnchorProps) => {
  if (props.size) {
    return css`
      font-size: ${props.theme.sizes[props.size]};
    `
  }
  return ''
}

const underlineStyle = (props: ThemedStyledAnchorProps) => {
  if (!props.underline) {
    return css`
      text-decoration: none;
    `
  }
  return ''
}

export const StyledAnchor = styled.a<AnchorProps>`
  ${sizeStyle}
  ${colorStyle}
  ${underlineStyle}
`

import styled, { css } from 'styled-components'
import { ButtonProps } from './Button'
import { ThemedProps } from '../../theme'
import { darken } from 'polished'

type ThemedStyledButtonProps = ThemedProps<ButtonProps>

const getColor = (props: ThemedStyledButtonProps) => {
  if (props.color) {
    return props.theme.colors[props.color]
  }
  return ''
}

const getHoverDarkenAmount = (props: ThemedStyledButtonProps) => {
  return props.theme.button.hoverDarkenAmount
}

const baseStyle = (props: ThemedStyledButtonProps) => css`
  border: ${props.theme.button.border.color} ${props.theme.button.border.width} ${props.theme.button.border.style};
  border-radius: ${props.theme.button.border.radius};
  background-color: ${getColor(props)};
  color: ${props.theme.button.fillTextColor};
  :hover {
    transition: background-color 175ms;
    background-color: ${props.color &&
    darken(getHoverDarkenAmount(props), getColor(props))};
  }
`

const outlineStyle = (props: ThemedStyledButtonProps) => css`
  border-radius: ${props.theme.button.border.radius};
  border: ${getColor(props)} ${props.theme.button.border.width} ${props.theme.button.border.style};
  color: ${getColor(props)};
  background-color: transparent;
  :hover {
    transition: all 175ms;
    background-color: ${props.color &&
    darken(getHoverDarkenAmount(props), getColor(props))};
    border-color: ${props.color &&
    darken(getHoverDarkenAmount(props), getColor(props))};
    color: ${props.theme.button.fillTextColor};
  }
`

const ghostStyle = (props: ThemedStyledButtonProps) => css`
  border: none;
  background-color: transparent;
  color: ${getColor(props)};
  text-decoration-color: ${getColor(props)};
  :hover {
    transition: all 175ms;
    text-decoration: underline;
  }
`

const disableStyle = (props: ThemedStyledButtonProps) => css`
  background-color: ${props.theme.button.disabled.backgroundColor};
  border-color: ${props.theme.button.disabled.borderColor};
  color: ${props.theme.button.disabled.color};
  pointer-events: none;
  cursor: default;
`

const outlineDisableStyle = (props: ThemedStyledButtonProps) => css`
  background-color: transparent;
  border-color: ${props.theme.button.disabled.outlineColor};
  color: ${props.theme.button.disabled.outlineColor};
  pointer-events: none;
  cursor: default;
`

const ghostDisableStyle = (props: ThemedStyledButtonProps) => css`
  border: none;
  background-color: transparent;
  color: ${props.theme.button.disabled.ghostColor};
  text-decoration: none;
  pointer-events: none;
  cursor: default;
`

const selectButtonStyle = (props: ThemedStyledButtonProps) => {
  if (props.outline) {
    return outlineStyle(props)
  }

  if (props.ghost) {
    return ghostStyle(props)
  }

  return baseStyle(props)
}

const selectDisableStyle = (props: ThemedStyledButtonProps) => {
  if (props.outline && props.disabled) {
    return outlineDisableStyle(props)
  }

  if (props.ghost && props.disabled) {
    return ghostDisableStyle(props)
  }

  if (props.disabled) {
    return disableStyle(props)
  }

  return null
}

export const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  font: inherit;
  text-decoration: none;
  background: transparent;
  outline: none;
  border-radius: ${(props) => props.theme.button.border.radius};

  ${(props) => selectButtonStyle(props)}
  ${(props) => selectDisableStyle(props)}
`

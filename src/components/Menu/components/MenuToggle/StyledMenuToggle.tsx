import styled, { css } from 'styled-components'
import { ThemedProps } from '../../../../theme'
import { darken } from 'polished'
import { MenuToggleProps } from './MenuToggle'

type StyledMenuToggleProps = ThemedProps<MenuToggleProps>

const getColor = (props: StyledMenuToggleProps) => {
  if (props.color) {
    return props.theme.colors[props.color]
  }
  return ''
}

const borderStyle = (props: StyledMenuToggleProps) => css`
  border-style: ${props.theme.menu.toggle.border.borderStyle};
  border-color: ${props.theme.menu.toggle.border.borderColor};
  border-radius: ${props.theme.menu.toggle.border.borderRadius};

  border-bottom-width: ${props.theme.menu.toggle.border.borderBottomWidth};
  border-top-width: ${props.theme.menu.toggle.border.borderTopWidth};
  border-left-width: ${props.theme.menu.toggle.border.borderLeftWidth};
  border-right-width: ${props.theme.menu.toggle.border.borderRightWidth};

  border-bottom-right-radius: ${props.isOpen
    ? '0'
    : props.theme.menu.toggle.border.borderRadius};
  border-bottom-left-radius: ${props.isOpen
    ? '0'
    : props.theme.menu.toggle.border.borderRadius};
`

const baseStyle = (props: StyledMenuToggleProps) => css`
  background-color: ${props.isOpen
    ? darken(props.theme.menu.hoverDarkenAmount, getColor(props))
    : getColor(props)};
  border-color: ${props.theme.menu.base.borderColor};
  color: ${props.theme.menu.base.textColor};

  :hover {
    transition: background-color ${props.theme.menu.transitionTime};
    background-color: ${darken(
      props.theme.menu.hoverDarkenAmount,
      getColor(props)
    )};
  }
`

const invertStyle = (props: StyledMenuToggleProps) => css`
  background-color: ${props.isOpen
    ? darken(props.theme.menu.hoverDarkenAmount, getColor(props))
    : 'transparent'};
  border-color: ${getColor(props)};
  color: ${props.isOpen ? props.theme.menu.text.color : getColor(props)};

  :hover {
    transition: all ${props.theme.menu.transitionTime};
    color: ${props.theme.menu.text.color};
    background-color: ${darken(
      props.theme.menu.hoverDarkenAmount,
      getColor(props)
    )};
    border-color: ${darken(
      props.theme.menu.hoverDarkenAmount,
      getColor(props)
    )};
  }
`

const cleanStyle = (props: StyledMenuToggleProps) => css`
  background-color: ${props.isOpen
    ? darken(
        props.theme.menu.clean.hoverDarkenAmount,
        props.theme.menu.clean.backgroundColor
      )
    : props.theme.menu.clean.backgroundColor};
  color: ${getColor(props)};
  border: none;
  :hover {
    transition: background-color ${props.theme.menu.transitionTime};
    background-color: ${darken(
      props.theme.menu.clean.hoverDarkenAmount,
      props.theme.menu.clean.backgroundColor
    )};
  }
`

const linkStyle = (props: StyledMenuToggleProps) => css`
  background-color: transparent;
  color: ${getColor(props)};
  border: none;
  :hover {
    transition: text-decoration ${props.theme.menu.transitionTime};
    text-decoration: underline;
  }
`

const disabledStyle = (props: StyledMenuToggleProps) => css`
  pointer-events: none;
  cursor: default;
  color: ${props.theme.menu.disabled.color};
`

const selectStyles = (props: StyledMenuToggleProps) => {
  if (props.clean && props.disabled) {
    return disabledStyle
  }

  if (props.invertColors && props.disabled) {
    return disabledStyle
  }

  if (props.link && props.disabled) {
    return disabledStyle
  }

  if (props.clean) {
    return cleanStyle
  }

  if (props.invertColors) {
    return invertStyle
  }

  if (props.link) {
    return linkStyle
  }

  return baseStyle
}

export const StyledMenuToggle = styled.button<StyledMenuToggleProps>`
  cursor: pointer;
  font: inherit;
  text-decoration: none;
  background: transparent;
  outline: none;
  border: none;

  ${borderStyle}
  ${(props) => selectStyles(props)}
`

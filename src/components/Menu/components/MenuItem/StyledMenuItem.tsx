import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { MenuItemProps } from './MenuItem'
import { ThemedProps } from '../../../../theme'

type StyledMenuItemProps = ThemedProps<MenuItemProps>

const getColor = (props: StyledMenuItemProps) => {
  if (props.color) {
    return props.theme.colors[props.color]
  }
  return ''
}

const hoverStyle = (props: StyledMenuItemProps) => css`
  transition: background-color ${props.theme.menu.transitionTime};
  background-color: ${props.clean
    ? props.theme.menu.clean.backgroundColor
    : darken(props.theme.menu.hoverDarkenAmount, getColor(props))};
  color: ${props.link
    ? props.theme.colors.white
    : props.theme.menu.clean.backgroundColor};
`

const paddingStyle = (props: StyledMenuItemProps) => css`
  padding-bottom: ${props.theme.menu.itemPadding.bottom};
  padding-left: ${props.theme.menu.itemPadding.left};
  padding-right: ${props.theme.menu.itemPadding.right};
  padding-top: ${props.theme.menu.itemPadding.top};
`

export const StyledMenuItem = styled.div<StyledMenuItemProps>`
  cursor: pointer;
  background-color: transparent;
  ${paddingStyle}

  :hover {
    ${hoverStyle}
  }
`

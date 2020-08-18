import styled, { css } from 'styled-components'
import { ThemedProps } from '../../../../theme'
import { MenuItemsContainerProps } from './MenuItemsContainer'
import { darken } from 'polished'

type StyledMenuItemsContainerProps = ThemedProps<MenuItemsContainerProps>

const getColor = (props: StyledMenuItemsContainerProps) => {
  if (props.color) {
    return props.theme.colors[props.color]
  }
  return ''
}

const selectBackgroundColor = (props: StyledMenuItemsContainerProps) => {
  if (props.clean) {
    return darken(
      props.theme.menu.clean.hoverDarkenAmount,
      props.theme.menu.clean.backgroundColor
    )
  }

  if (props.link) {
    return props.theme.colors.white
  }

  return getColor(props)
}

const selectTextColor = (props: StyledMenuItemsContainerProps) => {
  if (props.clean) {
    return getColor(props)
  }

  if (props.link) {
    return props.theme.colors.secondary
  }

  return props.theme.menu.text.color
}

const shadowStyle = (props: StyledMenuItemsContainerProps) => {
  if (props.link) {
    return css`
      border-radius: 0px 6px 6px 6px;
      box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.07);
      border: solid 1px #efefef;
    `
  }
  return ''
}

const textStyle = (props: StyledMenuItemsContainerProps) => css`
  font-size: ${props.theme.menu.text.fontSize};
  font-weight: ${props.theme.menu.text.fontWeight};
  text-align: ${props.theme.menu.text.textAlign};
`

export const StyledMenuItemsContainer = styled.div<
  StyledMenuItemsContainerProps
>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
  color: ${(props) => selectTextColor(props)};
  ${textStyle}
  background-color: ${(props) => selectBackgroundColor(props)};
  ${shadowStyle}
  z-index: 999;
`

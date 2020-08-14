import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
import { ThemedProps } from '../../theme'
import { BaseBadgeProps } from './Badge'

type ThemedBadgeProps = ThemedProps<BaseBadgeProps>

const getColor = (props: ThemedBadgeProps) => {
  if (props.color) {
    return props.theme.colors[props.color]
  }
  return ''
}

const paddingStyle = (props: ThemedBadgeProps) => css`
  padding-top: ${props.theme.badge.padding.top};
  padding-left: ${props.theme.badge.padding.left};
  padding-bottom: ${props.theme.badge.padding.bottom};
  padding-right: ${props.theme.badge.padding.right};
`

const marginStyle = (props: ThemedBadgeProps) => css`
  margin-top: ${props.theme.badge.margin.top};
  margin-left: ${props.theme.badge.margin.left};
  margin-bottom: ${props.theme.badge.margin.bottom};
  margin-right: ${props.theme.badge.margin.right};
`

const colorStyle = (props: ThemedBadgeProps) => css`
  color: ${getColor(props)};
  background-color: ${transparentize(0.95, getColor(props))};
`

const textStyle = (props: ThemedBadgeProps) => css`
  font-size: ${props.theme.badge.text.fontSize};
  text-align: center;
  font-weight: ${props.theme.badge.text.fontWeight};
`

const borderStyle = (props: ThemedBadgeProps) => css`
  border-radius: ${props.theme.badge.border.borderRadius};
  border-color: ${props.theme.badge.border.borderColor};
  border-top-width: ${props.theme.badge.border.borderTopWidth};
  border-bottom-width: ${props.theme.badge.border.borderBottomWidth};
  border-left-width: ${props.theme.badge.border.borderLeftWidth};
  border-right-width: ${props.theme.badge.border.borderRightWidth};
`

export const StyledBadge = styled.span`
  ${paddingStyle}
  ${marginStyle}
  ${textStyle}
  ${colorStyle}
  ${borderStyle}
`

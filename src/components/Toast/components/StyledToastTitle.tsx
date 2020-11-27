import styled, { css } from 'styled-components'
import { ThemedProps, ToastStatuses } from '../../../themeTypes'

export type ToastTitleProps = {
  status: ToastStatuses
}

export type ThemedTitleProps = ThemedProps<ToastTitleProps>

const marginStyle = (props: ThemedTitleProps) => css`
  margin-top: ${props.theme.toast.titleMargin.top};
  margin-left: ${props.theme.toast.titleMargin.left};
  margin-bottom: ${props.theme.toast.titleMargin.bottom};
  margin-right: ${props.theme.toast.titleMargin.right};
`

const textStyle = (props: ThemedTitleProps) => css`
  font-size: ${props.theme.toast.titleSize};
  color: ${props.theme.toast.status[props.status].titleColor};
  font-weight: bold;
`

export const StyledToastTitle = styled.span<ThemedTitleProps>`
  ${textStyle}
  ${marginStyle}
`

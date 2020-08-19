import styled, { css } from 'styled-components'
import { ThemedProps, ToastStatuses } from '../../../theme'

export type ToastMessageProps = {
  status: ToastStatuses
}

export type ThemedMessageProps = ThemedProps<ToastMessageProps>

const textStyle = (props: ThemedMessageProps) => css`
  font-size: ${props.theme.toast.textSize};
  color: ${props.theme.toast.status[props.status].textColor};
  text-align: start;
  opacity: 0.8;
`

export const StyledToastMessage = styled.span<ThemedMessageProps>`
  ${textStyle}
`

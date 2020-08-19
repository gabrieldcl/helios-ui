import styled, { css, keyframes } from 'styled-components'
import { ThemedProps } from '../../theme'
import { ToastProps } from './Toast'

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const FadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
`

type ThemedStyledToastProps = ThemedProps<ToastProps>

const baseStyle = (props: ThemedStyledToastProps) => css`
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 4px;
  right: ${props.theme.toast.container.right};
  min-width: ${props.theme.toast.container.minWidth};
  text-align: ${props.theme.toast.container.textAlign};
`

const paddingStyle = (props: ThemedStyledToastProps) => css`
  padding-left: ${props.theme.toast.container.padding.left};
  padding-right: ${props.theme.toast.container.padding.right};
  padding-top: ${props.theme.toast.container.padding.top};
  padding-bottom: ${props.theme.toast.container.padding.bottom};
`
const widthStyle = (props: ThemedStyledToastProps) => css`
  max-width: ${props.theme.toast.maxWidth};
  min-width: ${props.theme.toast.minWidth};
`

const borderStyle = (props: ThemedStyledToastProps) => css`
  border: ${props.theme.toast.border.width} ${props.theme.toast.border.style}
    ${props.theme.toast.border.color};
  border-radius: ${props.theme.toast.border.radius};
`

const shadowStyle = (props: ThemedStyledToastProps) => css`
  box-shadow: ${props.theme.toast.shadow};
`

const statusStyle = (props: ThemedStyledToastProps) => css`
  background-color: ${props.theme.toast.status[props.status].backgroundColor};
  color: ${props.theme.toast.status[props.status].textColor};
`

const onCloseAnimation = (props: ThemedStyledToastProps) =>
  props.animateOnClose
    ? css`
        animation: ${FadeOut} ${props.closeAnimationTime}ms;
      `
    : ''

const onOpenAnimation = (props: ThemedStyledToastProps) =>
  props.animateOnOpen
    ? css`
        animation: ${FadeIn} ${props.openAnimationTime}ms;
      `
    : ''

export const StyledToast = styled.div<ToastProps & { isDestroying?: boolean }>`
  ${baseStyle}
  ${borderStyle}
  ${paddingStyle}
  ${shadowStyle}
  ${statusStyle}
  ${widthStyle}
  ${(props) => (props.isDestroying ? onCloseAnimation : onOpenAnimation)}
`

import React, { ReactNode } from 'react'
import { StyledToast } from './StyledToast'
import { ComponentPropsWithoutOmit, StyledProps } from '../../typeHelpers'
import { ToastStatuses } from '../../theme'

export interface BaseToastProps {
  children: ReactNode
  isDestroying: boolean
  position?: string
  animateOnClose?: boolean
  animateOnOpen?: boolean
  openAnimationTime?: number
  closeAnimationTime?: number
  status: ToastStatuses
}

export type ToastProps = ComponentPropsWithoutOmit<BaseToastProps, 'div'>

export const DEFAULT_PROPS = {
  position: 'bottom-right'
}

export const Toast: React.FC<StyledProps<ToastProps, 'div'>> = (props) => {
  return (
    <StyledToast {...DEFAULT_PROPS} {...props}>
      {props.children}
    </StyledToast>
  )
}

import React from 'react'
import { ToastStatuses } from '../../theme'

export type ToastData = {
  id: number
  status: ToastStatuses
  title: string
  message?: string
  closeTime: number
  position:
    | 'top-left'
    | 'top-right'
    | 'top-center'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center'
  animateOnClose: boolean
  animateOnOpen: boolean
  isDestroying: boolean
  closeAnimationTime: number
  openAnimationTime: number
}

export type CreateToastParams = Omit<
  ToastData,
  | 'id'
  | 'isDestroying'
  | 'animateOnClose'
  | 'closeAnimationTime'
  | 'openAnimationTime'
  | 'animateOnOpen'
> &
  Partial<
    Pick<
      ToastData,
      | 'animateOnClose'
      | 'animateOnOpen'
      | 'closeAnimationTime'
      | 'openAnimationTime'
    >
  >

export type ToastContextProviderValue = {
  toastState: ToastData[]
  createToast: (params: CreateToastParams) => void
}

export const ToastContext = React.createContext<ToastContextProviderValue>(
  {} as any
)

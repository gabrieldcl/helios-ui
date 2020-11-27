import React, { useState, useMemo, useContext } from 'react'
import {
  ToastContext,
  ToastData,
  CreateToastParams,
  ToastContextProviderValue
} from './ToastContext'
import { Theme } from '../../themeTypes'
import { ThemeContext } from 'styled-components'

export const ToastProvider: React.FC = (props) => {
  const [toastState, setToastState] = useState<ToastData[]>([])
  const [lastToastId, setLastToastId] = useState(0)
  const theme = useContext<Theme>(ThemeContext)

  const createToast = (params: CreateToastParams) => {
    const shouldAnimateOnClose =
      !!params.animateOnClose || !!theme.toast.shouldAnimateOnClose
    const shouldAnimateOnOpen =
      !!params.animateOnOpen || !!theme.toast.shouldAnimateOnOpen
    const closeAnimationTime =
      params.closeAnimationTime || theme.toast.closeAnimationTime
    const openAnimationTime =
      params.openAnimationTime || theme.toast.openAnimationTime

    const nextToastId = lastToastId + 1
    const newToast: ToastData = {
      closeTime: params.closeTime,
      message: params.message,
      title: params.title,
      status: params.status,
      id: nextToastId,
      position: params.position,
      animateOnClose: shouldAnimateOnClose,
      animateOnOpen: shouldAnimateOnOpen,
      isDestroying: false,
      closeAnimationTime,
      openAnimationTime
    }

    setTimeout(() => {
      setToastState((prevState) => {
        if (!shouldAnimateOnClose) {
          return prevState.filter((toast) => toast.id !== nextToastId)
        }
        return prevState.map((toast) => {
          if (toast.id !== nextToastId) {
            return toast
          }
          return { ...toast, isDestroying: true }
        })
      })

      if (shouldAnimateOnClose) {
        setTimeout(() => {
          setToastState((prevState) =>
            prevState.filter((toast) => toast.id !== nextToastId)
          )
        }, closeAnimationTime)
      }
    }, params.closeTime)

    setLastToastId((prevState) => prevState + 1)
    setToastState((prevState) => [...prevState, newToast])
  }

  const providerValue = useMemo(
    (): ToastContextProviderValue => ({
      toastState,
      createToast
    }),
    [toastState, setToastState]
  )

  return (
    <ToastContext.Provider value={providerValue}>
      {props.children}
    </ToastContext.Provider>
  )
}

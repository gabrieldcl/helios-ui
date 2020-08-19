import { useContext } from 'react'
import { ToastContext, ToastData } from './ToastContext'

export type OpenToastParams = Omit<ToastData, 'id'>

export const useToast = () => {
  const { createToast, toastState } = useContext(ToastContext)

  return { createToast, toastState }
}

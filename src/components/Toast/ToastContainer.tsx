import React, { useMemo } from 'react'
import { Toast } from './Toast'
import { ToastData } from './ToastContext'
import { useToast } from './useToast'
import {
  StyledToastInnerContainer,
  StyledToastOuterContainer,
  StyledToastMessage,
  StyledToastTitle
} from './components'
import { Box } from '../'

type ToastInnerContainerProps = {
  position: ToastData['position']
}

const ToastInnerContainer = (prop: ToastInnerContainerProps) => {
  const { toastState } = useToast()

  if (!toastState) {
    throw new Error('You should wrap the component with Toast Provider!')
  }

  const toastsToRender = useMemo(() => {
    return toastState.filter((toast) => toast.position === prop.position)
  }, [toastState, prop.position])

  const toastList = useMemo(
    () =>
      toastsToRender.map((toast) => {
        return (
          <Toast
            key={toast.id}
            status={toast.status}
            isDestroying={toast.isDestroying}
            animateOnClose={toast.animateOnClose}
            animateOnOpen={toast.animateOnOpen}
            openAnimationTime={toast.openAnimationTime}
            closeAnimationTime={toast.closeAnimationTime}
          >
            <Box direction='column' alignItems='start'>
              <StyledToastTitle status={toast.status}>
                {toast.title}
              </StyledToastTitle>
              <StyledToastMessage status={toast.status}>
                {toast.message}
              </StyledToastMessage>
            </Box>
          </Toast>
        )
      }),
    [toastsToRender]
  )

  return (
    <StyledToastInnerContainer position={prop.position}>
      {toastList}
    </StyledToastInnerContainer>
  )
}

export const ToastContainer = () => {
  return (
    <StyledToastOuterContainer>
      <ToastInnerContainer position='bottom-center' />
      <ToastInnerContainer position='bottom-left' />
      <ToastInnerContainer position='bottom-right' />
      <ToastInnerContainer position='top-right' />
      <ToastInnerContainer position='top-left' />
      <ToastInnerContainer position='top-center' />
    </StyledToastOuterContainer>
  )
}

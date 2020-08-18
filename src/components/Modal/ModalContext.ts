import React from 'react'

export type ModalsState = {
  [K: string]: boolean
}

export type ModalContextProvideValue = {
  modalsState: ModalsState
  setModalsState: React.Dispatch<React.SetStateAction<ModalsState>>
}

export const ModalContext = React.createContext<ModalContextProvideValue>(
  {} as any
)

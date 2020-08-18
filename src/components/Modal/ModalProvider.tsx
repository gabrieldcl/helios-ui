import React, { useState, useMemo } from 'react'
import { ModalContext, ModalsState } from './ModalContext'

export const ModalProvider: React.FC = (props) => {
  const [modalsState, setModalsState] = useState<ModalsState>({})

  const providerValue = useMemo(
    () => ({
      modalsState,
      setModalsState
    }),
    [modalsState, setModalsState]
  )

  return (
    <ModalContext.Provider value={providerValue}>
      {props.children}
    </ModalContext.Provider>
  )
}

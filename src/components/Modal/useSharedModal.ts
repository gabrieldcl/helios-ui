import { useContext } from 'react'
import { ModalContext } from './ModalContext'

export const useSharedModal = (modalId: string): [boolean, () => void] => {
  const { modalsState, setModalsState } = useContext(ModalContext)

  const toggleModal = () => {
    setModalsState((previousModalState) => ({
      ...previousModalState,
      [modalId]: !previousModalState[modalId]
    }))
  }

  const isModalOpen = !!modalsState[modalId]

  return [isModalOpen, toggleModal]
}

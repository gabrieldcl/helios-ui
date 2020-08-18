import React from 'react'
import ReactDOM from 'react-dom'
import { StyledModal } from './StyledModal'
import {
  ModalOverlay,
  CloseButton,
  CloseContainer,
  StyledModalContainer
} from './components'

export type ModalProps = {
  isOpen: boolean
  toggle: () => void
  removeClose?: boolean
  removePadding?: boolean
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  toggle,
  children,
  removeClose,
  removePadding
}) =>
  isOpen
    ? ReactDOM.createPortal(
        <StyledModalContainer>
          <ModalOverlay onClick={toggle} />
          <StyledModal removePadding={removePadding}>
            {!removeClose && (
              <CloseContainer>
                <CloseButton onClick={toggle}>
                  <span>&times;</span>
                </CloseButton>
              </CloseContainer>
            )}
            {children}
          </StyledModal>
        </StyledModalContainer>,
        document.body
      )
    : null

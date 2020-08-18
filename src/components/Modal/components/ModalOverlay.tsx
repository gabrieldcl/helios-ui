import styled, { keyframes } from 'styled-components'

const backgroundAnimation = keyframes`
  from {
    transform: background-color;
    background-color: rgba(0, 0, 0, 0);
  }

  to {
    transform: background-color;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1090;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  animation: ${backgroundAnimation} 200ms forwards;
`

import styled, { css } from 'styled-components'
import { ThemedProps } from '../../theme'
import { ModalProps } from './Modal'

export type ThemedModalProps = Pick<ThemedProps<ModalProps>, 'removePadding'>

const centerStyle = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const StyledModal = styled.div<ThemedModalProps>`
  z-index: 1100;
  padding: ${(props) => (props.removePadding ? '0' : '18px')};
  overflow: auto;
  max-height: calc(100vh - 60px);
  background-color: white;
  border-radius: 6px;

  ${centerStyle}
`

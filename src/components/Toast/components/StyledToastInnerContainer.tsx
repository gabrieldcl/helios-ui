import styled, { css } from 'styled-components'

type StyledToastInnerContainerProps = {
  position?: string
}

const handlePlacement = (props: StyledToastInnerContainerProps) => {
  if (props.position === 'top-left') {
    return css`
      top: 0;
      left: 0;
    `
  }
  if (props.position === 'top-center') {
    return css`
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    `
  }
  if (props.position === 'top-right') {
    return css`
      top: 0;
      right: 0;
    `
  }
  if (props.position === 'bottom-left') {
    return css`
      bottom: 0;
      left: 0;
    `
  }
  if (props.position === 'bottom-center') {
    return css`
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    `
  }
  if (props.position === 'bottom-right') {
    return css`
      bottom: 0;
      right: 0;
    `
  }
}

export const StyledToastInnerContainer = styled.div`
  position: fixed;
  z-index: 999;
  padding: 5px;
  box-sizing: border-box;
  ${handlePlacement}
`

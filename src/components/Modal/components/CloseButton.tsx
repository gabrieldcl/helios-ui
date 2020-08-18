import styled from 'styled-components'

export const CloseButton = styled.button`
  padding: 8px;
  background: transparent;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  color: #4a4a4a;
  opacity: 0.3;
  cursor: pointer;
  border: none;
  outline: none;
  text-decoration: none;

  &:hover {
    transition: opacity 200ms;
    opacity: 0.8;
    text-decoration: none;
  }
`

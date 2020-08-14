import styled from 'styled-components'

export type ContainerProps = {
  error?: string
}

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  position: relative;
  padding-top: 18px;
  padding-bottom: 0px;
  background-color: ${(props) => props.theme.input.container.backgroundColor};
  margin-bottom: ${(props: ContainerProps) => (props.error ? '0px' : '18px')};
`

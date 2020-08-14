import styled from 'styled-components'
import { BoxProps } from './Box'

type StyledBoxProps = Required<BoxProps>

export const StyledBox = styled.div<StyledBoxProps>`
  display: flex;
  padding: ${(props) => props.theme[props.padding]};
  margin: ${(props) => props.theme[props.margin]};
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.alignItems};
  align-content: ${(props) => props.alignContent};
  align-self: ${(props) => props.alignSelf};
  justify-content: ${(props) => props.justifyContent};
  background-color: ${(props) => props.theme[props.backgroundColor]};
  height: ${(props) => props.height};
`

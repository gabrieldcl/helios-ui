import { Text } from '../../Text'
import styled from 'styled-components'

export const Error = styled(Text)`
  color: ${(props) => props.theme.input.error.color};
  margin-top: ${(props) => props.theme.input.error.margin.top};
  margin-bottom: ${(props) => props.theme.input.error.margin.bottom};
`

import styled from 'styled-components'
import { Box } from '../../../Box'
import { OptionProps } from './Option'
import { ThemedProps } from '../../../../theme'

type ThemedStyledOptionProps = ThemedProps<OptionProps>

export const StyledOption = styled(Box)`
  background-color: ${(props: ThemedStyledOptionProps) =>
    props.theme.input.container.backgroundColor};
  :hover {
    cursor: pointer;
    background-color: ${(props: ThemedStyledOptionProps) =>
      props.theme.input.focus.borderColor};
    color: white;
  }
`

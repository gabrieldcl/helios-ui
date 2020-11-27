import styled from 'styled-components'
import { ThemedProps } from '../../../../themeTypes'
import { DropToggleProps } from './DropToggle'

type StyledDropToggleProps = ThemedProps<DropToggleProps>

export const StyledDropToggle = styled.div<StyledDropToggleProps>`
  cursor: pointer;
  font: inherit;
  text-decoration: none;
  outline: none;
`

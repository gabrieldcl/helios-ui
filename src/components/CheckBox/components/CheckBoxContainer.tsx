import styled, { css } from 'styled-components'
import { CheckBoxProps } from '../CheckBox'
import { ThemedProps } from '../../../theme'

type ThemedCheckBoxContainerProps = ThemedProps<CheckBoxProps>

const paddingStyle = (props: ThemedCheckBoxContainerProps) => css`
  padding-top: ${props.theme.checkbox.container.padding.top};
  padding-bottom: ${props.theme.checkbox.container.padding.bottom};
  padding-left: ${props.theme.checkbox.container.padding.left};
  padding-right: ${props.theme.checkbox.container.padding.right};
`

export const CheckBoxContainer = styled.label<CheckBoxProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  ${paddingStyle}
`

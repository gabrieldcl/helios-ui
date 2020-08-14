import styled, { css } from 'styled-components'
import { ThemedProps } from '../../../theme'
import { CheckBoxProps } from '../CheckBox'
import { darken } from 'polished'

type ThemedStyledCheckBoxBoxProps = ThemedProps<CheckBoxProps>

const borderStyle = (props: ThemedStyledCheckBoxBoxProps) => css`
  border-color: ${props.theme.checkbox.checkboxbox.border.borderColor};
  border-radius: ${props.theme.checkbox.checkboxbox.border.borderRadius};
  border-bottom-width: ${props.theme.checkbox.checkboxbox.border
    .borderBottomWidth};
  border-top-width: ${props.theme.checkbox.checkboxbox.border.borderTopWidth};
  border-left-width: ${props.theme.checkbox.checkboxbox.border.borderLeftWidth};
  border-right-width: ${props.theme.checkbox.checkboxbox.border
    .borderRightWidth};
`

const checkedStyle = (props: ThemedStyledCheckBoxBoxProps) => css`
  border-color: ${props.checked
    ? props.theme.checkbox.checkboxbox.checked.borderColor
    : props.theme.checkbox.checkboxbox.unchecked.borderColor};
  background-color: ${props.checked
    ? props.theme.checkbox.checkboxbox.checked.backgroundColor
    : props.theme.checkbox.checkboxbox.unchecked.backgroundColor};
`

const hoverStyle = (props: ThemedStyledCheckBoxBoxProps) => css`
  background-color: ${darken(
    0.2,
    props.theme.checkbox.checkboxbox.hover.backgroundColor
  )};
  border-color: ${darken(
    0.2,
    props.theme.checkbox.checkboxbox.hover.borderColor
  )};
`

const baseStyle = (props: ThemedStyledCheckBoxBoxProps) => css`
  display: flex;
  top: 0;
  right: 0;
  height: ${props.theme.checkbox.checkboxbox.height};
  width: ${props.theme.checkbox.checkboxbox.width};
  background-color: ${props.theme.checkbox.checkboxbox.backgroundColor};
  margin-right: 14px;
  align-items: center;
  justify-content: center;
  ${borderStyle}
  :hover {
    ${props.disabled ? '' : hoverStyle}
  }
  ${checkedStyle}
`

export const CheckBoxBox = styled.div<CheckBoxProps>`
  ${baseStyle}
`

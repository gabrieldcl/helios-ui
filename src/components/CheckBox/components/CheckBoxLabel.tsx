import styled, { css } from 'styled-components'
import { ThemedProps } from '../../../theme'
import { CheckBoxProps } from '../CheckBox'
import { Text } from '../../Text'

type ThemedCheckBoxLabelProps = ThemedProps<CheckBoxProps>

const fontStyle = (props: ThemedCheckBoxLabelProps) => css`
  font-size: ${props.theme.checkbox.label.size};
  color: ${props.disabled
    ? props.theme.checkbox.label.disabled.color
    : props.theme.checkbox.label.color};
`

export const CheckBoxLabel = styled(Text)<CheckBoxProps>`
  ${fontStyle}
`

import React, { memo } from 'react'
import {
  CheckBoxContainer,
  CheckBoxInput,
  CheckBoxBox,
  CheckmarkIcon,
  CheckBoxLabel
} from './components'
import { ComponentProps, StyledProps } from '../../typeHelpers'
import { CSSObject } from 'styled-components'

export interface BaseCheckBoxProps {
  style?: CSSObject
  label?: string
}

export type CheckBoxProps = ComponentProps<BaseCheckBoxProps, 'input', 'style'>

const CheckBoxComponent: React.FC<StyledProps<CheckBoxProps, 'input'>> = (
  props
) => {
  const { label, onChange, checked, disabled, value } = props

  return (
    <CheckBoxContainer>
      <CheckBoxInput
        disabled={disabled}
        type='checkbox'
        onChange={onChange}
        checked={checked}
        value={value}
      />
      <CheckBoxBox disabled={disabled} checked={checked}>
        <CheckmarkIcon disabled={disabled} checked={checked} />
      </CheckBoxBox>
      <CheckBoxLabel disabled={disabled}>{label}</CheckBoxLabel>
    </CheckBoxContainer>
  )
}

export const CheckBox = memo(CheckBoxComponent)

import React, { ChangeEventHandler } from 'react'
import { Input } from '../Input'
import { CSSObject } from 'styled-components'
import { ComponentProps, StyledProps } from '../../typeHelpers'

export type BaseTextInputProps = {
  style?: CSSObject
  label: string
  onChange?: ChangeEventHandler
  error?: string
}

export type TextInputProps = ComponentProps<
  BaseTextInputProps,
  'input',
  'onChange'
>

export const TextInput: React.FC<StyledProps<TextInputProps, 'input'>> = (
  props
) => {
  return <Input type='text' error='' {...props} onChange={props.onChange} />
}

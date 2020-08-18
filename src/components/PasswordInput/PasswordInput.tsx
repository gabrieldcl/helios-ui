import React, { ChangeEventHandler } from 'react'
import { CSSObject } from 'styled-components'
import { Input } from '../Input'
import { ComponentProps, StyledProps } from '../../typeHelpers'

export type BasePasswordInputProps = {
  style?: CSSObject
  label: string
  onChange?: ChangeEventHandler
  error?: string
}

export type PasswordInputProps = ComponentProps<
  BasePasswordInputProps,
  'input',
  'onChange'
>

export const PasswordInput: React.FC<StyledProps<
  PasswordInputProps,
  'input'
>> = (props) => {
  return (
    <Input
      type='password'
      error=''
      {...props}
      onChange={props.onChange}
      style={{ letterSpacing: '10px' }}
    />
  )
}

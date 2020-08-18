import React, { memo, ChangeEventHandler } from 'react'
import { Input } from '../Input'
import { CSSObject } from 'styled-components'
import { ComponentProps, StyledProps } from '../../typeHelpers'

export type BaseNumberInputProps = {
  style?: CSSObject
  label: string
  onChange?: ChangeEventHandler
  error?: string
}

export type NumberInputProps = ComponentProps<
  BaseNumberInputProps,
  'input',
  'onChange'
>

const NumberInputComponent: React.FC<StyledProps<NumberInputProps, 'input'>> = (
  props
) => {
  return <Input type='number' error='' {...props} onChange={props.onChange} />
}

export const NumberInput = memo(NumberInputComponent)

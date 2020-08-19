import React from 'react'
import { ComponentPropsWithoutOmit, StyledProps } from '../../typeHelpers'
import { StyledSlider } from './StyledSlider'

export type BaseSlideInputProps = {
  min: number
  max: number
}

export type SliderInputProps = ComponentPropsWithoutOmit<
  BaseSlideInputProps,
  'input'
>

export const SliderInput: React.FC<StyledProps<SliderInputProps, 'input'>> = (
  props
) => {
  const { value, min, max } = props
  const currentValue = value ? +value : 0
  const progressWidth = ((currentValue - min) / (max - min)) * 100

  return <StyledSlider progress={progressWidth} type='range' {...props} />
}

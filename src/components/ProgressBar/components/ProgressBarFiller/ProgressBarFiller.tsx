import React from 'react'
import { StyledProgressBarFiller } from './StyledProgressBarFiller'
import { ComponentPropsWithoutOmit, StyledProps } from '../../../../typeHelpers'

export type BaseProgressBarFillerProps = {
  color?: string
  value: number
}

export type ProgressBarFillerProps = ComponentPropsWithoutOmit<
  BaseProgressBarFillerProps,
  'div'
>

export const ProgressBarFiller: React.FC<StyledProps<
  ProgressBarFillerProps,
  'div'
>> = (props) => {
  return <StyledProgressBarFiller {...props} />
}

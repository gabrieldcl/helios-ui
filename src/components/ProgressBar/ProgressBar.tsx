import React from 'react'
import {
  ComponentPropsWithoutOmit,
  StyledProps,
  PickDefaultProps
} from '../types'
import { ProgressBarContainer, ProgressBarFiller } from './components'
import { CSSObject } from 'styled-components'

export type BaseProgressBarProps = {
  style?: CSSObject
  value: number
  color?: string
}

const handleExceedingValues = (min: number, value: number, max: number) => {
  return Math.min(Math.max(min, value), max)
}

export type ProgressBarProps = ComponentPropsWithoutOmit<
  BaseProgressBarProps,
  'div'
>
export type ProgressBarDefaultProps = Omit<
  PickDefaultProps<BaseProgressBarProps>,
  'div'
>

const DEFAULT_PROPS: ProgressBarDefaultProps = {
  color: 'secondary',
  style: {}
}

export const ProgressBar: React.FC<StyledProps<ProgressBarProps, 'div'>> = (
  props
) => {
  return (
    <ProgressBarContainer {...props}>
      <ProgressBarFiller
        {...DEFAULT_PROPS}
        color={props.color}
        value={handleExceedingValues(0, props.value, 100)}
      />
    </ProgressBarContainer>
  )
}

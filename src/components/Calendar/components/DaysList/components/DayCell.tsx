import React, { ReactNode } from 'react'
import {
  PickDefaultProps,
  ComponentPropsWithoutOmit,
  StyledProps
} from '../../../../../typeHelpers'
import { StyledDayCell } from './StyledDayCell'

export interface BaseDayCellProps {
  color?: string
  backgroundColor?: string
  selected?: boolean
  children?: ReactNode
  blank?: boolean
}

export type DayCellProps = ComponentPropsWithoutOmit<BaseDayCellProps, 'td'>
export type DayCellDefaultProps = PickDefaultProps<BaseDayCellProps>

const DEFAULT_PROPS: DayCellDefaultProps = {
  color: 'white',
  backgroundColor: 'primary',
  selected: false,
  blank: false
}

export const DayCell: React.FC<StyledProps<DayCellProps, 'td'>> = (props) => {
  return (
    <StyledDayCell {...DEFAULT_PROPS} {...props}>
      {props.children}
    </StyledDayCell>
  )
}

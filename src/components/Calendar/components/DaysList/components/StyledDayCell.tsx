import styled, { css } from 'styled-components'
import { ThemedProps } from '../../../../../theme'
import { DayCellProps } from './DayCell'

// TODO: Add everything to theme

type ThemedStyledDayCellProps = ThemedProps<DayCellProps>

const getColor = (props: ThemedStyledDayCellProps) => {
  if (props.color) {
    return props.selected
      ? props.theme.colors[props.color]
      : props.theme.calendar.day.color
  }
  return ''
}

const getBackgroundColor = (props: ThemedStyledDayCellProps) => {
  if (props.backgroundColor) {
    return props.selected
      ? props.theme.colors[props.backgroundColor]
      : props.theme.calendar.day.backgroundColor
  }
  return ''
}

const baseStyle = (props: ThemedStyledDayCellProps) => css`
  height: 100%;
  font-size: 16px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;

  background-color: ${getBackgroundColor(props)};
  color: ${getColor(props)};
  border-radius: ${props.theme.calendar.day.borderRadius};
  :hover {
    background-color: ${props.theme.calendar.day.selected.backgroundColor};
    color: ${props.theme.calendar.day.selected.color};
  }
`

const blankStyle = (props: ThemedStyledDayCellProps) => css`
  background-color: white;
  color: ${props.theme.calendar.day.color};
`

const selectStyle = (props: ThemedStyledDayCellProps) => {
  if (props.blank) {
    return blankStyle(props)
  }

  return baseStyle(props)
}

export const StyledDayCell = styled.td<DayCellProps>`
  ${(props) => selectStyle(props)}
`

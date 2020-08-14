import styled, { css } from 'styled-components'
import { ThemedProps } from '../../../../theme'
import { DatePickerProps } from '../../DatePicker'

type CalendarContainerThemedProps = ThemedProps<DatePickerProps>

const showAtTopStyle = (props: CalendarContainerThemedProps) => {
  if (props.showAtTop) {
    return css`
      bottom: 28%;
    `
  }
  return null
}

export const CalendarContainer = styled.div<CalendarContainerThemedProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 999;
  ${showAtTopStyle}
`

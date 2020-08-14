import React, { useState, useEffect, useRef } from 'react'
import { Calendar, TextInput } from '../'
import { DatePickerContainer, CalendarContainer } from './components'
import { CSSObject } from 'styled-components'
import { ComponentProps, StyledProps } from '../../typeHelpers'

type BaseDatePickerProps = {
  style?: CSSObject
  label?: string
  focus?: boolean
  error?: string
  date: string
  showAtTop?: boolean
  onChange: any
}

export type DatePickerProps = ComponentProps<
  BaseDatePickerProps,
  'input',
  'onChange'
>

export const DatePicker: React.FC<StyledProps<DatePickerProps, 'input'>> = (
  props
) => {
  const { date, onChange, showAtTop } = props
  const [showCalendar, setShowCalendar] = useState(false)
  const datePickerRef = useRef<HTMLInputElement>(null)

  const closeMenu = () => {
    setShowCalendar(false)
  }

  const onOutsideClick = (event: any) => {
    if (
      datePickerRef.current &&
      !datePickerRef.current.contains(event.target)
    ) {
      closeMenu()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', onOutsideClick)
    return () => {
      document.removeEventListener('mousedown', onOutsideClick)
    }
  }, [showCalendar])

  return (
    <DatePickerContainer ref={datePickerRef}>
      {showCalendar && showAtTop && (
        <CalendarContainer {...props}>
          <Calendar setShowCalendar={setShowCalendar} onDayClick={onChange} />
        </CalendarContainer>
      )}
      <TextInput
        readOnly
        label={props.label || ''}
        onClick={() => setShowCalendar(!showCalendar)}
        value={date}
        {...props}
      />
      {showCalendar && !showAtTop && (
        <CalendarContainer {...props}>
          <Calendar setShowCalendar={setShowCalendar} onDayClick={onChange} />
        </CalendarContainer>
      )}
    </DatePickerContainer>
  )
}

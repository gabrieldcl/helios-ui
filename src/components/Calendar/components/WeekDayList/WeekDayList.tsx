import React, { useMemo } from 'react'
import { WeekDay } from '../../styledComponents'

type WeekDayListProps = {
  weekDays: string[]
  useShortNotation: boolean
}

export const WeekDayList = (props: WeekDayListProps) => {
  const { weekDays, useShortNotation } = props

  const daysList = useMemo(() => {
    if (useShortNotation) {
      const shortWeekDays = weekDays.map((weekDay) => weekDay.charAt(0))
      return shortWeekDays.map((weekDay, index) => (
        <th
          align='center'
          style={{ width: '14.3%' }}
          key={`${weekDay}_${index}`}
        >
          <WeekDay>{weekDay.toUpperCase()}</WeekDay>
        </th>
      ))
    }

    return weekDays.map((weekDay, index) => (
      <th align='center' style={{ width: '14.3%' }} key={`${weekDay}_${index}`}>
        <WeekDay>{weekDay.toUpperCase()}</WeekDay>
      </th>
    ))
  }, [weekDays, useShortNotation])

  return <React.Fragment>{daysList}</React.Fragment>
}

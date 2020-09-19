import React, { Dispatch } from 'react'
import { DayCell } from './components'
import moment from 'moment'

export type DaysListProps = {
  firstWeekDayOfMonth: string
  daysInMonth: number
  currentDay: string
  currentMonth: string
  currentYear: string
  onDayClick: (date: string) => void
  setShowCalendar?: Dispatch<boolean>
}

const getSelectedDate = (
  setShowCalendar: Dispatch<boolean> | undefined,
  day: number,
  month: string,
  year: string
) => {
  const formmatedDay = day <= 9 ? `0${day}` : day
  const formattedMonth = moment().month(month).format('MM')
  if (setShowCalendar) {
    setShowCalendar(false)
  }
  return `${formmatedDay}/${formattedMonth}/${year}`
}

export const DaysList = (props: DaysListProps) => {
  const {
    firstWeekDayOfMonth,
    daysInMonth,
    currentDay,
    currentMonth,
    currentYear,
    onDayClick,
    setShowCalendar
  } = props
  const blanks: any = []
  const daysInMonthList = []
  for (let i = 0; i < +firstWeekDayOfMonth; i++) {
    blanks.push(<DayCell blank key={i * -10} />)
  }
  for (let day = 1; day <= daysInMonth; day++) {
    daysInMonthList.push(
      <DayCell
        onClick={() => {
          onDayClick(
            getSelectedDate(setShowCalendar, day, currentMonth, currentYear)
          )
        }}
        key={day * 10}
        selected={day === +currentDay}
      >
        {day}
      </DayCell>
    )
  }

  const months = [...blanks, ...daysInMonthList]
  const rows: HTMLTableDataCellElement[][] = []
  let cells: HTMLTableDataCellElement[] = []

  months.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row)
    } else {
      rows.push(cells.slice())
      cells = []
      cells.push(row)
    }
    if (i === months.length - 1) {
      rows.push(cells.slice())
    }
  })

  const daysList = rows.map((d: HTMLTableDataCellElement[], i: number) => {
    return <tr key={`${d}_${i}`}>{d}</tr>
  })

  return <React.Fragment>{daysList}</React.Fragment>
}

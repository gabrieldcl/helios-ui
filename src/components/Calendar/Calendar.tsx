import React, { useMemo, useState, Dispatch } from 'react'
import moment, { Moment } from 'moment'
import { Container } from './styledComponents'
import {
  MonthList,
  YearList,
  DaysList,
  WeekDayList,
  Navigation
} from './components'

type CalendarProps = {
  locale?: string
  onDayClick: (date: string) => void
  setShowCalendar?: Dispatch<boolean>
}

const DEFAULT_PROPS = {
  locale: 'pt-br'
}

export const Calendar: React.FC<CalendarProps> = (props) => {
  const { locale, onDayClick, setShowCalendar } = props
  moment.locale(locale || DEFAULT_PROPS.locale)

  const [dateObject, setDateObject] = useState<Moment>(moment())
  const [showMonths, setShowMonths] = useState(false)
  const [showYears, setShowYears] = useState(false)

  const weekDays = moment.weekdaysShort()
  const months = moment.monthsShort()
  const firstWeekDayOfMonth = useMemo(
    () => moment(dateObject).startOf('month').format('d'),
    [dateObject]
  )
  const daysInMonth = useMemo(() => moment(dateObject).daysInMonth(), [
    dateObject
  ])
  const month = useMemo(() => moment(dateObject).format('MMMM'), [dateObject])
  const year = useMemo(() => moment(dateObject).format('Y'), [dateObject])
  const currentDay = useMemo(() => moment(dateObject).format('D'), [dateObject])

  const onPrev = () => {
    setDateObject(
      moment(dateObject).subtract(1, showYears === true ? 'year' : 'month')
    )
  }

  const onNext = () => {
    setDateObject(
      moment(dateObject).add(1, showYears === true ? 'year' : 'month')
    )
  }

  const toggleMonths = () => {
    setShowYears(false)
    setShowMonths(true)
  }

  const toggleYears = () => {
    setShowMonths(false)
    setShowYears(true)
  }

  const setYear = (year: number) => {
    const dateContext = moment(dateObject).set('year', year)
    setDateObject(dateContext)
  }

  const onSelectYear = (year: number) => {
    toggleYears()
    setYear(year)
    setShowYears(false)
    setShowMonths(true)
  }

  const setMonth = (month: string) => {
    const monthNumber = months.indexOf(month)
    const dateContext = moment(dateObject).set('month', monthNumber)
    setDateObject(dateContext)
  }

  const onSelectMonth = (month: string) => {
    toggleMonths()
    setMonth(month)
    setShowMonths(false)
  }

  return (
    <Container>
      <Navigation
        month={month}
        toggleMonths={toggleMonths}
        toggleYears={toggleYears}
        year={year}
        onNext={onNext}
        onPrev={onPrev}
        showYears={showYears}
        showMonths={showMonths}
      />
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            {!showMonths && !showYears && (
              <WeekDayList weekDays={weekDays} useShortNotation />
            )}
          </tr>
        </thead>
        <tbody>
          {showMonths && (
            <MonthList onSelectMonth={onSelectMonth} months={months} />
          )}
          {showYears && <YearList onSelectYear={onSelectYear} year={year} />}
          {!showMonths && !showYears && (
            <DaysList
              setShowCalendar={setShowCalendar}
              onDayClick={onDayClick}
              currentYear={year}
              currentMonth={month}
              currentDay={currentDay}
              firstWeekDayOfMonth={firstWeekDayOfMonth}
              daysInMonth={daysInMonth}
            />
          )}
        </tbody>
      </table>
    </Container>
  )
}

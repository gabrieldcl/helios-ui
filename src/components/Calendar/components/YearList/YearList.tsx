import React from 'react'
import moment from 'moment'
import { Year } from './Year'

type YearListProps = {
  year: string
  onSelectYear: (year: number) => void
}

const getDates = (startDate: string, endDate: string) => {
  const dateArray = []
  let currentDate = moment(startDate)
  const stopDate = moment(endDate)
  while (currentDate < stopDate) {
    dateArray.push(moment(currentDate).format('YYYY'))
    currentDate = moment(currentDate).add(1, 'year')
  }
  return dateArray
}

export const YearList = (props: YearListProps) => {
  const { year, onSelectYear } = props
  const years: any = []
  const nextYears = moment()
    .set('year', +year)
    .add(12, 'year')
    .format('Y')
  const nextTwelveYears = getDates(year, nextYears)

  nextTwelveYears.map((year: string, index: number) => {
    years.push(
      <Year key={`${year}_${index}`} onClick={() => onSelectYear(+year)}>
        {year}
      </Year>
    )
  })

  const rows: HTMLTableDataCellElement[][] = []
  let cells: HTMLTableDataCellElement[] = []

  years.forEach((row: HTMLTableDataCellElement, i: number) => {
    if (i % 3 !== 0 || i === 0) {
      cells.push(row)
    } else {
      rows.push(cells)
      cells = []
      cells.push(row)
    }
  })

  rows.push(cells)
  const yearList = rows.map(
    (cells: HTMLTableDataCellElement[], index: number) => {
      return <tr key={`${cells}_${index}`}>{cells}</tr>
    }
  )

  return <React.Fragment>{yearList}</React.Fragment>
}

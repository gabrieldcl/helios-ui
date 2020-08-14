import React from 'react'
import { Month } from './Month'

type MonthListProps = {
  onSelectMonth: (month: string) => void
  months: string[]
}

export const MonthList = (props: MonthListProps) => {
  const { onSelectMonth, months } = props
  const monthsCells = [] as any
  months.map((month, index) => {
    monthsCells.push(
      <Month key={`${month}_${index}`} onClick={() => onSelectMonth(month)}>
        {month.toUpperCase()}
      </Month>
    )
  })

  const rows: HTMLTableDataCellElement[][] = []
  let cells: HTMLTableDataCellElement[] = []

  monthsCells.forEach((row: HTMLTableDataCellElement, i: number) => {
    if (i % 3 !== 0 || i === 0) {
      cells.push(row)
    } else {
      rows.push(cells)
      cells = []
      cells.push(row)
    }
  })

  rows.push(cells)
  const monthList = rows.map(
    (cells: HTMLTableDataCellElement[], index: number) => {
      return <tr key={`${cells}_${index}`}>{cells}</tr>
    }
  )

  return <>{monthList}</>
}

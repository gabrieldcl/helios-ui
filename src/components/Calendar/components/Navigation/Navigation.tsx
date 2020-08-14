import React from 'react'
import {
  NavigationContainer,
  LabelContainer,
  IconContainer,
  CalendarLabel,
  LeftArrow,
  RightArrow
} from './components'

type NavigationProps = {
  onPrev: () => void
  onNext: () => void
  month: string
  year: string
  toggleMonths: () => void
  toggleYears: () => void
  showYears: boolean
  showMonths: boolean
}

export const Navigation: React.FC<NavigationProps> = (props) => {
  const {
    onPrev,
    onNext,
    toggleMonths,
    toggleYears,
    month,
    year,
    showYears,
    showMonths
  } = props

  return (
    <NavigationContainer>
      <IconContainer onClick={() => onPrev()}>
        <LeftArrow color='#368df7' />
      </IconContainer>
      <LabelContainer>
        {!showYears && (
          <CalendarLabel
            onClick={() => toggleMonths()}
            style={{ textTransform: 'capitalize' }}
          >
            {month}
          </CalendarLabel>
        )}
        {!showMonths && (
          <CalendarLabel onClick={() => toggleYears()}>{year}</CalendarLabel>
        )}
      </LabelContainer>
      <IconContainer key={1} onClick={() => onNext()}>
        <RightArrow color='#368df7' />
      </IconContainer>
    </NavigationContainer>
  )
}

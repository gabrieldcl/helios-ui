import React from 'react'
import { StyledCard } from './StyledCard'
import { Container, Footer } from './components'
import { CSSObject } from 'styled-components'

export type CardProps = {
  style?: CSSObject
  footer?: JSX.Element
  onClick?: () => void
  fullWidth?: boolean
  hover?: CSSObject
}

export const Card: React.FC<CardProps> = (props) => (
  <StyledCard {...props}>
    <Container>{props.children}</Container>
    {props.footer && <Footer>{props.footer}</Footer>}
  </StyledCard>
)

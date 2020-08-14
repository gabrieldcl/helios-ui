import styled, { css } from 'styled-components'
import { ThemedProps } from '../../theme'
import { CardProps } from './Card'

export type StyledCardProps = ThemedProps<CardProps>

const onHoverStyle = (props: StyledCardProps) => css`
  :hover {
    ${props.hover}
  }
`

const cardStyle = (props: StyledCardProps) => css`
  background-color: ${props.theme.card.backgroundColor};
  border: ${props.theme.card.border};
  border-radius: ${props.theme.card.borderRadius};
  box-shadow: ${props.theme.card.boxShadow};
`

export const StyledCard = styled.div<StyledCardProps>`
  position: relative;
  ${(props) => props.fullWidth && 'flex: 1;'}
  ${(props) => cardStyle(props)}
  ${(props) => onHoverStyle(props)}
`

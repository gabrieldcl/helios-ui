import styled, { css } from 'styled-components'
import { SimpleThemedProps } from '../../../themeTypes'

const footerStyle = (props: SimpleThemedProps) => css`
  background-color: ${props.theme.card.footer.backgroundColor};
  border-bottom-right-radius: ${props.theme.card.borderRadius};
  border-bottom-left-radius: ${props.theme.card.borderRadius};
  padding: ${props.theme.card.footer.padding};
  font-size: ${props.theme.card.footer.fontSize};
`

export const Footer = styled.div`
  ${(props) => footerStyle(props)}
`

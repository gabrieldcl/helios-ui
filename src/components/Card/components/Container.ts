import styled, { css } from 'styled-components'
import { SimpleThemedProps } from '../../../theme'

const containerStyle = (props: SimpleThemedProps) => css`
  padding: ${props.theme.card.container.padding};
`

export const Container = styled.div`
  ${(props) => containerStyle(props)}
`

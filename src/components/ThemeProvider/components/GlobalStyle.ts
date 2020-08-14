import { createGlobalStyle } from 'styled-components'
import { Theme } from '../../../theme'

type GlobalStyleProps = {
  theme: Theme
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    padding: 0;
    margin: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    font-family: ${(props) => props.theme.font.family};
  }
`

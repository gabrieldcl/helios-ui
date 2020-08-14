import React from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { GlobalStyle } from './components'
import { Theme } from '../../theme'

interface MutualAppProps {
  theme: Theme
}

export const ThemeProvider: React.FC<MutualAppProps> = (props) => {
  return (
    <StyledComponentsThemeProvider theme={props.theme}>
      <GlobalStyle />
      {props.children}
    </StyledComponentsThemeProvider>
  )
}

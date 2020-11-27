import React from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { GlobalStyle } from './components'
import { Theme } from '../../themeTypes'

interface HeliosProps {
  theme: Theme
}

export const Helios: React.FC<HeliosProps> = (props) => {
  return (
    <StyledComponentsThemeProvider theme={props.theme}>
      <GlobalStyle />
      {props.children}
    </StyledComponentsThemeProvider>
  )
}

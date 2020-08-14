import React from 'react'
import { Box, ThemeProvider } from 'helios-ui'
import { theme } from './utils/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        margin='small'
        padding='medium'
        style={{
          color: 'white',
          backgroundColor: '#FF4086'
        }}
      >
        Hello! Im a box'
      </Box>
    </ThemeProvider>
  )
}

export default App

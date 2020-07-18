import React from 'react'
import { ThemeProvider } from 'styled-components'

import { THEME } from './src/constants/theme'

export const wrapRootElement  = ({ element }) => (
  <ThemeProvider theme={THEME}>
    {element}
  </ThemeProvider>
)
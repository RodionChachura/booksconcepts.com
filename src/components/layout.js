import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { THEME } from "../constants/theme"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    /* margin: 0; */
    outline: none;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`

export default ({ children }) => (
  <ThemeProvider theme={THEME}>
    <GlobalStyle/>
    {children}
  </ThemeProvider>
)
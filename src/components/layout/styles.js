import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
body {
    background: ${p => p.theme.color.background};
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  body {
    margin: 0px;
  }

  div[role="group"][tabindex] {
    height: 100%;
  }

  * {
    margin: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0)
  }
`
import React from "react"
import { GlobalStyle} from './styles'

export default ({ children }) => (
  <>
    <GlobalStyle/>
    {children}
  </>
)
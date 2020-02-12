import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export default ({ children }) => (
  <Container>
    {children}
  </Container>
)
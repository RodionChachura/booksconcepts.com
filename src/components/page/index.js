import React from "react"

import { Container, Wrapper } from './styles'

export default ({ children }) => (
  <Container>
    <Wrapper>
      {children}
    </Wrapper>
  </Container>
)
import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 1320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1320px) {
    width: 100%;
    padding: 0 20px;
  }
`

export default ({ children }) => (
  <Container>
    <Wrapper>
      {children}
    </Wrapper>
  </Container>
)
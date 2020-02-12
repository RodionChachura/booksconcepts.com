import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 40px;
`

export default () => {
  return (
    <Container>
      <Link
        to={`/`}
      >
        Books Concepts (in development)
      </Link>
    </Container>
  )
}
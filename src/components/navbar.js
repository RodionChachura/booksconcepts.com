import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
`

const Content = styled.div`
  width: 1320px;
`

export default () => {
  return (
    <Container>
      <Content>
        <Link
          to={`/`}
        >
          BooksConcepts
        </Link>
      </Content>
    </Container>
  )
}
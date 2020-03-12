import React from "react"
import styled from "@emotion/styled"
import { css } from '@emotion/core'
import { Link } from "gatsby"

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`

const Logo = styled(Link)`
  font-weight: bold;
  font-size: 34px;
  text-decoration: none;
  color: black;
  transition: 0.3s ease-in;
  ${p => p.hoverable && css`
    :hover {
      color: #46cdcf;
    }
  `}
`

export default ({ indexPage = false}) => {
  return (
    <Container>
      <Logo hoverable={!indexPage} to={`/`}>
        BooksConcepts
      </Logo>
    </Container>
  )
}
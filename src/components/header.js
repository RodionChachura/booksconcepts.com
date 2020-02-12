import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Header = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
`

export default ({ title }) => {
  return (
    <Header>
      <Link
        to={`/`}
      >
        {title}
      </Link>
    </Header>
  )
}
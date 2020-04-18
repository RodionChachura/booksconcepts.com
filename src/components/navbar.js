import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

const Placeholder = styled.div`
  width: 100%;
  height: 80px;
`

const Container = styled(Placeholder)`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  z-index: 1;
`

const Content = styled.div`
  width: 1320px;
  display: flex;
  align-items: center;
  @media (max-width: 1320px) {
    width: 100%;
    padding: 0 20px;
  }
`

const Logo = styled(Link)`
  color: ${p => p.theme.color.mainFont} !important;
  font-weight: bold;
  font-size: 34px;
  text-decoration: none;
  color: black;
  transition: 0.3s ease-in;
  ${p => p.hoverable && css`
    :hover {
      color: ${p => p.theme.color.primaryFont} !important;
    }
  `}
`

export default ({ indexPage = false}) => {
  return (
    <>
      <Container>
        <Content>
          <Logo hoverable={!indexPage} to={`/`}>
            BooksConcepts
          </Logo>
        </Content>
      </Container>
      <Placeholder/>
    </>
  )
}
import React, { useEffect, useState } from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { registerListener } from "../utils"

const Placeholder = styled.div`
  width: 100%;
  height: ${p => p.full ? 80 : 40}px;
  transition: height .5s;
`

const Container = styled(Placeholder)`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.5);
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
  font-weight: bold;
  font-size: 34px;
  text-decoration: none;
  color: ${p => p.theme.color.mainFont};
  transition: color 0.3s ease-in, font-size .5s;
  :hover {
    color: ${p => p.theme.color.primaryFont};
  }
`

export default ({ indexPage = false}) => {
  const [fullNavbar, setFullNavbar] = useState(true)
  useEffect(() => {
    return registerListener('scroll', (e) => {
      setFullNavbar(window.scrollY < 10)
    })
  }, [setFullNavbar])
  console.log(fullNavbar)
  return (
    <>
      <Container full={fullNavbar}>
        <Content>
          <Logo full={fullNavbar} hoverable={!indexPage} to={`/`}>
            {fullNavbar ? 'BooksConcepts' : 'BC'}
          </Logo>
        </Content>
      </Container>
      <Placeholder full={fullNavbar}/>
    </>
  )
}
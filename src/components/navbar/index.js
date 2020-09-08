import React, { useEffect, useState } from "react"

import { registerListener } from "../../utils"
import { Placeholder, Container, Content, Logo } from './styles'
import { NAME } from '../../constants/generic'

export default ({ indexPage = false}) => {
  const [fullNavbar, setFullNavbar] = useState(true)
  useEffect(() => {
    return registerListener('scroll', () => {
      setFullNavbar(window.scrollY < 10)
    })
  }, [setFullNavbar])

  return (
    <>
      <Container fullNavbar={fullNavbar}>
        <Content>
          <Logo to={`/`}>
            {fullNavbar ? NAME : 'BC'}
          </Logo>
        </Content>
      </Container>
      <Placeholder fullNavbar={fullNavbar}/>
    </>
  )
}
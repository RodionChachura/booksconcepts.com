import React from 'react'

import { Container, Logo, Button } from './styles'
import { NAME } from '../../../constants/generic'
import { APP_URL } from '../../../constants/links'

const Header = () => {
  const linkParams = {
    target: "_blank",
    rel: "noopener noreferrer",
    href: APP_URL
  }
  return (
    <Container>
      <Logo {...linkParams}>{NAME}</Logo>
      <Button {...linkParams}>Explore</Button>
    </Container>
  )
}

export default Header
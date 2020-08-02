import React from 'react'

import Header from './header'
import Content from './content'
import { Container } from './styles'

const EmbeddedLanding = (props) => {
  return (
    <Container>
      <Header/>
      <Content {...props} />
    </Container>
  )
}

export default EmbeddedLanding
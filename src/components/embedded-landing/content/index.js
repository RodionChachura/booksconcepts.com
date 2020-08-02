import React from 'react'

import { Container, Text } from './styles'
import Gallery from './gallery'
import index from '../../../../content/blog/index.json'

export const Content = (props) => {
  const number = index.books.length
  return (
    <Container>
      <Text>Key concepts from {number} best nonfiction books curated by Rodion</Text>
      <Gallery {...props} />
    </Container>
  )
}

export default Content
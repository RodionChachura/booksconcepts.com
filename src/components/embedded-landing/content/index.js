import React from 'react'

import { Container, Text } from './styles'
import index from '../../../../content/blog/index.json'

export const Content = () => {
  const number = index.books.length
  return (
    <Container>
      <Text>Key concepts from {number} best nonfiction books curated by Rodion</Text>
    </Container>
  )
}

export default Content
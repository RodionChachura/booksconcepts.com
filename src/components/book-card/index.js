import React from "react"
import Img from 'gatsby-image'

import { Container, Name, ImgWrapper, Author, Minutes } from './styles'

const BookCard = ({ route, title, author, image, minutes }) => {
  return (
    <Container to={route}>
      <Name>{title}</Name>
      <Author>{author}</Author>
      <ImgWrapper>
        <Img fixed={image} />
      </ImgWrapper>
      <Minutes>{minutes} min read</Minutes>
    </Container>
  )
}

export default BookCard
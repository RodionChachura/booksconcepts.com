import React from 'react'
import { withSize } from 'react-sizeme'
import Img from 'gatsby-image'

import { Wrapper, Container, BOOK_SIDE, FULL_BOOK_HEIGHT, BookContainer, ImgWrapper } from './styles'
import index from '../../../../../content/blog/index.json'
import { APP_URL } from '../../../../constants/links'

const Gallery = ({ size: { width, height }, data }) => {
  const renderContent = () => {
    const columns = Math.floor(width / BOOK_SIDE)
    const rows = Math.floor(height / FULL_BOOK_HEIGHT)
    const booksNumber = columns * rows

    const nodes = data.allMarkdownRemark.edges.map(e => e.node)

    return index.books.slice(0, booksNumber).map(({ name, route }) => {
      const { frontmatter: { featuredImage }, fields: { slug }} = nodes.find(n => n.fields.slug.split('/').join('') === route)
      return (
        <BookContainer key={name}>
          <ImgWrapper target="_blank" rel="noopener noreferrer" href={`${APP_URL}/${slug}`}>
            <Img fixed={featuredImage.childImageSharp.fixed} />
          </ImgWrapper>
        </BookContainer>
      )
    })
  }

  return (
    <Wrapper fixedHeight={width && height && Math.floor(height / FULL_BOOK_HEIGHT) * FULL_BOOK_HEIGHT}>
      <Container>
        {width && height && renderContent()}
      </Container>
    </Wrapper>
  )
}

export default withSize({ monitorHeight: true })(Gallery)

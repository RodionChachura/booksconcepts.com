import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from "@emotion/styled"
import SEO from "../components/seo"
import Page from '../components/page'
import Navbar from "../components/navbar"
import index from '../../content/blog/index.json'

const Grid = styled.div`
  width: 100%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
`

const Container = styled(Link)`
  min-height: 400px;
  text-decoration: none;
  transition: 0.3s ease-in;
  color: black;
  :hover {
    color: #46cdcf;
  }
`

const Name = styled.p`
  font-size: 18px;
  color: inherit;
  margin: 0 0 5px 0;
`

const Author = styled.p`
  color: #616161;
  margin: 0;
`

const BlogIndex = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(e => e.node)
  const books = nodes.map(n => {
    const image = n.frontmatter.featuredImage.childImageSharp.fixed
    const { route, name } = index.books.find(b => b.route === n.fields.slug.split('/').join(''))
    const [title, author] = name.split(' by ')
    const subtitleStart = title.indexOf(':')
    return {
      route,
      name,
      title: subtitleStart > 0 ? `${title.slice(0, subtitleStart)}${title.slice(title.length - 1)}` : title,
      author,
      image
    }
  })
  return (
    <Page>
      <Navbar/>
      <SEO title="All Books" />
      <Grid>
        {books.map(book => (
          <Container key={book.route} to={book.route}>
            <Img fixed={book.image} />
            <Name>{book.title}</Name>
            <Author>{book.author}</Author>
          </Container>
        ))}
      </Grid>
    </Page>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fixed(height: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from "styled-components"
import SEO from "../components/seo"
import Page from '../components/page'
import Navbar from "../components/navbar"
import index from '../../content/blog/index.json'
import Layout from '../components/layout'

const Grid = styled.div`
  margin-top: 40px;
  width: 100%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
`

const Container = styled(Link)`
  min-height: 400px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Name = styled.p`
  font-size: 18px;
  color: ${p => p.theme.color.mainFont};
  margin: 0;
`

const Author = styled(Name)`
  color: ${p => p.theme.color.secondaryFont};
  margin-bottom: 10px;
`

const Minutes = styled(Author)`
  margin-top: 10px;
  font-weight: bold;
`

const BlogIndex = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(e => e.node)
  const books = index.books.map(({ name, route }) => {
    const { frontmatter: { featuredImage, minutes }, fields: { slug }} = nodes.find(n => n.fields.slug.split('/').join('') === route)
    const [title, author] = name.split(' by ')
    const subtitleStart = title.indexOf(':')
    return {
      route: slug,
      name,
      title: subtitleStart > 0 ? `${title.slice(0, subtitleStart)}${title.slice(title.length - 1)}` : title,
      author,
      image: featuredImage.childImageSharp.fixed,
      minutes
    }
  })
  return (
    <Layout>
      <Page>
        <Navbar indexPage/>
        <SEO title="All Books" />
        <Grid>
          {books.map(book => (
            <Container key={book.route} to={book.route}>
              <Name>{book.title}</Name>
              <Author>{book.author}</Author>
              <Img fixed={book.image} />
              <Minutes>{Math.round(book.minutes)} min read</Minutes>
            </Container>
          ))}
        </Grid>
      </Page>
    </Layout>
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
            minutes
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

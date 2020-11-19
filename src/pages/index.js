import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import Page from '../components/page'
import Navbar from "../components/navbar"
import index from '../../content/blog/index.json'
import Layout from '../components/layout'
import BookCard from '../components/book-card'
import AuthorPromotion from '../components/author-promotion'
import { parseBookName } from '../utils'

const Grid = styled.div`
  width: 100%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
`

const BlogIndex = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(e => e.node)
  const books = index.books.map(({ name, route }) => {
    const { frontmatter: { featuredImage, minutes }, fields: { slug }} = nodes.find(n => n.fields.slug.split('/').join('') === route)
    const { title, author } = parseBookName(name)
    return {
      route: slug,
      name,
      title,
      author,
      image: featuredImage.childImageSharp.fixed,
      minutes
    }
  })
  return (
    <Layout>
      <SEO title="Summaries of the best nonfiction books" description={`Looking for useful book summaries? BooksConcepts shares the key ideas from ${books.length} best nonfictional books of all-time.`} />
      <Page>
        <Navbar indexPage/>
        <AuthorPromotion/>
        <Grid>
          {books.map(book => (
            <BookCard {...book} key={book.route} />
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
                fixed(height: 280) {
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

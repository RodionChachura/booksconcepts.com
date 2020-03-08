import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Page from '../components/page'
import Navbar from "../components/navbar"
import { books } from '../../content/blog/index.json'

const BlogIndex = ({ data, location }) => {
  console.log(data)
  return (
    <Page>
      <Navbar/>
      <SEO title="All Books" />
      {books.map(({ name, route }) => 
        <div key={route} >
          <Link key={route} style={{ boxShadow: `none` }} to={`/${route}`}>
            {name}
          </Link>
        </div>
      )}
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
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`

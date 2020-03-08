import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from "@emotion/styled"
import SEO from "../components/seo"
import Page from '../components/page'
import Navbar from "../components/navbar"

const Grid = styled.div`
  width: 100%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
`

const Container = styled(Link)`
  /* border: 2px solid transparent;
  transition: 0.3s ease-in;
  :hover {
    border-color: #46cdcf;
  } */
`

const BlogIndex = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(e => e.node)
  console.log(nodes)
  return (
    <Page>
      <Navbar/>
      <SEO title="All Books" />
      <Grid>
        {nodes.map(n => (
          <Container key={n.id} to={n.fields.slug}>
            <Img fixed={n.frontmatter.featuredImage.childImageSharp.fixed} />
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

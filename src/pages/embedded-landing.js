import React from 'react'

import Layout from '../components/layout'
import Content from '../components/embedded-landing'

const EmbeddedLanding = (props) => {
  return (
    <Layout>
      <Content {...props} />
    </Layout>
  )
}

export default EmbeddedLanding

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
            featuredImage {
              childImageSharp {
                fixed(height: 200) {
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
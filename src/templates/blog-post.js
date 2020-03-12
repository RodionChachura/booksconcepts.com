import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import Page from "../components/page"
import Navbar from "../components/navbar"
import Layout from '../components/layout'

const Article = styled.article`
  max-width: 680px;
`

const Section = styled.section`
  color: ${p => p.theme.color.mainFont};
  h3 {
    font-size: 40px;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  h4 {
    margin-top: 40px;
  }

  p {
    margin-top: 18px;
  }

  li {
    margin-top: 18px;
  }

  figcaption {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: -20px;
    justify-content: center;
  }

  .gatsby-resp-image-wrapper {
    margin-bottom: 40px;
  }
`

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Page>
        <Navbar />
        <SEO
          title={post.frontmatter.title}
        />
        <Article>
          <Section dangerouslySetInnerHTML={{ __html: post.html }} />
        </Article>
      </Page>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
      }
    }
  }
`

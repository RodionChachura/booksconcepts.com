import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import Page from "../components/page"
import Navbar from "../components/navbar"

const Article = styled.article`
  max-width: 680px;
`

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Page>
      <Navbar />
      <SEO
        title={post.frontmatter.title}
      />
      <Article>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </Article>
    </Page>
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

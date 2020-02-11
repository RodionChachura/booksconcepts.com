import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import PageContainer from "../components/page-container"
import Header from "../components/header"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <PageContainer location={location}>
      <Header title={siteTitle} />
      <SEO
        title={post.frontmatter.title}
      />
      <article>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </PageContainer>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
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

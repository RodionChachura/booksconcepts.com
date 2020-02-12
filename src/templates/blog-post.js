import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import PageContent from "../components/page-content"
import Page from "../components/page"
import Navbar from "../components/navbar"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Page>
      <Navbar />
      <SEO
        title={post.frontmatter.title}
      />
      <PageContent>
        <article>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </PageContent>
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

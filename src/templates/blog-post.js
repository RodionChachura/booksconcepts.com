import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Page from "../components/page"
import Navbar from "../components/navbar"
import Layout from '../components/layout'
import { parseBookName } from '../utils'
import { Article, Section, Title, Minutes } from '../components/book'
import Promotion from '../components/promotion'

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const { title, author } = parseBookName(post.frontmatter.title)
  const minutes = Math.round(post.fields.readingTime.minutes)
  return (
    <Layout>
      <Page>
        <Navbar />
        <SEO
          title={`Book Summary: ${title}`}
          description={`This is a book summary of ${title} by ${author}. Read this summary to review key ideas and lessons from the book.`}
        />
        <Title>
          Book Summary: "{title}" by {author}
        </Title>
        <Minutes>{minutes} min read</Minutes>
        <Article>
          <Section dangerouslySetInnerHTML={{ __html: post.html }} />
          <Promotion/>
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
      fields {
        readingTime {
          minutes
        }
      }
    }
  }
`

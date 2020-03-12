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
    font-size: 34px;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  h4 {
    margin-top: 24px;
  }

  p, li {
    margin-top: 18px;
    font-size: 18px;
    line-height: 32px;
  }

  figcaption {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: -20px;
    justify-content: center;
  }

  figure:first-of-type + p {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      margin: 10px;
      font-weight: bold;
    }
  }

  a {
    text-decoration: none;
    color: ${p => p.theme.color.primaryFont};
    transition: ${p => p.theme.transition.default};
    border-bottom: 2px solid ${p => p.theme.color.primaryFont};
    :hover {
      color: ${p => p.theme.color.actionFont};
      border-color: ${p => p.theme.color.actionFont};
    }
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

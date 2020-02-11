import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { books } from '../../content/blog/index.json'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All Books" />
      <ol>
        {books.map(({ name, route }) => 
        <li key={route}>
          <Link style={{ boxShadow: `none` }} to={`/${route}`}>
            {name}
          </Link>
        </li>
        )}
      </ol>
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
  }
`

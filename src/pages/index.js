import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { books } from '../../content/blog/index.json'

const BlogIndex = ({ data, location }) => {
  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <SEO title="All Books" />
      {books.map(({ name, route }) => 
        <div>
          <Link key={route} style={{ boxShadow: `none` }} to={`/${route}`}>
            {name}
          </Link>
        </div>
      )}
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

import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import PageContainer from '../components/page-container'
import { books } from '../../content/blog/index.json'

const BlogIndex = ({ data, location }) => {
  return (
    <PageContainer>
      <SEO title="All Books" />
      {books.map(({ name, route }) => 
        <div key={route} >
          <Link key={route} style={{ boxShadow: `none` }} to={`/${route}`}>
            {name}
          </Link>
        </div>
      )}
    </PageContainer>
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

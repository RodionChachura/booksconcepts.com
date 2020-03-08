import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Page from '../components/page'
import Navbar from "../components/navbar"
import PageContent from "../components/page-content"
import { books } from '../../content/blog/index.json'

const BlogIndex = ({ data, location }) => {
  return (
    <Page>
      <Navbar/>
      <SEO title="All Books" />
      <PageContent>
        {books.map(({ name, route }) => 
          <div key={route} >
            <Link key={route} style={{ boxShadow: `none` }} to={`/${route}`}>
              {name}
            </Link>
          </div>
        )}
      </PageContent>
    </Page>
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

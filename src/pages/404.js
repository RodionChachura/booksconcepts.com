import React from "react"

import SEO from "../components/seo"
import PageContent from "../components/page-content"

const NotFoundPage = () => {
  return (
    <PageContent>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </PageContent>
  )
}

export default NotFoundPage
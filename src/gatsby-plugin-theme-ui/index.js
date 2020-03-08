import base from 'gatsby-theme-ui-blog/src/gatsby-plugin-theme-ui'
import merge from "lodash.merge"

export default merge({}, base, {
  fonts: {
    body: 'SourceSerifPro',
    heading: 'SourceSerifPro',
    monospace: 'SourceSerifPro',
  },
})
module.exports = {
  siteMetadata: {
    title: `Books Concepts`,
    author: `Rodion Chachura`,
    description: `Self-Development Books Key Concepts`,
    siteUrl: `https://booksconcepts.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-reading-time',
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/embedded-landing/`],
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-131566304-4`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Books Concepts`,
        short_name: `Books Concepts`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://7572155097a948beb54a9b8842f707da@sentry.io/2435864",
        environment: process.env.NODE_ENV,
        enabled: (() => ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)()
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts-with-attributes`,
      options: {
        fonts: [
          `montserrat`,
        ],
        display: 'swap',
        attributes: {
          rel: "stylesheet preload prefetch",
        }
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://booksconcepts.com`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'tf-booksconcepts-frontend-prod',
        protocol: 'https',
        hostname: 'booksconcepts.com'
      },
    },
  ],
}

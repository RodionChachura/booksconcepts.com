import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from "styled-components"

import SEO from "../components/seo"
import Page from '../components/page'
import Navbar from "../components/navbar"
import index from '../../content/blog/index.json'
import Layout from '../components/layout'
import { AUTHOR } from '../constants/links'

const Grid = styled.div`
  width: 100%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
`

const ImgWrapper = styled.div`
  border: 2px solid transparent;
`

const Container = styled(Link)`
  padding: 5px;
  min-height: 380px;
  min-width: 300px;
  transition: ${p => p.theme.transition.default};
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid transparent;
  justify-content: space-between;
  :hover {
    background: #F1F6F4;
    border-color: ${p => p.theme.color.primaryFont};
  }
`

const Name = styled.p`
  text-align: center;
  font-size: 18px;
  color: ${p => p.theme.color.mainFont};
  margin: 0;
`

const Author = styled(Name)`
  color: ${p => p.theme.color.secondaryFont};
  margin-bottom: 10px;
`

const Minutes = styled(Author)`
  margin-top: 10px;
  font-weight: bold;
`

const PromoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 160px;
  margin-bottom: 20px;
`

const PromoText = styled.p`
  font-size: 32px;
  color: ${p => p.theme.color.mainFont};
  font-weight: bold;
  text-align: center;
`

const AuthorLink = styled.a`
  text-decoration: none;
  color: ${p => p.theme.color.primaryFont};
  transition: ${p => p.theme.transition.default};
  border-bottom: 2px solid ${p => p.theme.color.primaryFont};
  :hover {
    color: ${p => p.theme.color.actionFont};
    border-color: ${p => p.theme.color.actionFont};
  }
`

const BlogIndex = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(e => e.node)
  const books = index.books.map(({ name, route }) => {
    const { frontmatter: { featuredImage, minutes }, fields: { slug }} = nodes.find(n => n.fields.slug.split('/').join('') === route)
    const [title, author] = name.split(' by ')
    const subtitleStart = title.indexOf(':')
    return {
      route: slug,
      name,
      title: subtitleStart > 0 ? `${title.slice(0, subtitleStart)}${title.slice(title.length - 1)}` : title,
      author,
      image: featuredImage.childImageSharp.fixed,
      minutes
    }
  })
  return (
    <Layout>
      <SEO title="All Books" />
      <Page>
        <Navbar indexPage/>
        <PromoWrapper>
          <PromoText>Key concepts from the best nonfiction books</PromoText>
          <PromoText>curated by <AuthorLink target="_blank" href={AUTHOR}>GeekRodion</AuthorLink></PromoText>
        </PromoWrapper>
        <Grid>
          {books.map(book => (
            <Container key={book.route} to={book.route}>
              <Name>{book.title}</Name>
              <Author>{book.author}</Author>
              <ImgWrapper>
                <Img fixed={book.image} />
              </ImgWrapper>
              <Minutes>{Math.round(book.minutes)} min read</Minutes>
            </Container>
          ))}
        </Grid>
      </Page>
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
    allMarkdownRemark {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            minutes
            featuredImage {
              childImageSharp {
                fixed(height: 280) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

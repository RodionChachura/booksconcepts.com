import styled from 'styled-components'

export const Title = styled.h1`
  margin-top: 20px;
  font-size: 32px;
`

export const Minutes = styled.h3`
  font-size: 18px;
  color: ${p => p.theme.color.primaryFont};
  margin: 10px 0;
  font-weight: bold;
`

export const Article = styled.article`
  max-width: 680px;
`

export const Section = styled.section`
  color: ${p => p.theme.color.mainFont};
  h3 {
    font-size: 34px;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  h4 {
    font-weight: bold;
    margin-top: 24px;
    font-size: 24px;
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

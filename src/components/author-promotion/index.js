import React from 'react'

import { AUTHOR } from '../../constants/links'
import { Container, PromoText, AuthorLink } from './styles'

const AuthorPromotion = () => (
  <Container>
    <PromoText>Summaries of the best nonfiction books</PromoText>
    <PromoText>curated by <AuthorLink target="_blank" href={AUTHOR}>GeekRodion</AuthorLink></PromoText>
  </Container>
)

export default AuthorPromotion
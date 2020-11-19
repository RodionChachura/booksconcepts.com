import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 160px;
  margin-bottom: 20px;
`

export const PromoText = styled.p`
  font-size: 32px;
  color: ${p => p.theme.color.mainFont};
  font-weight: bold;
  text-align: center;
`

export const AuthorLink = styled.a`
  text-decoration: none;
  color: ${p => p.theme.color.primaryFont};
  transition: ${p => p.theme.transition.default};
  border-bottom: 2px solid ${p => p.theme.color.primaryFont};
  :hover {
    color: ${p => p.theme.color.actionFont};
    border-color: ${p => p.theme.color.actionFont};
  }
`
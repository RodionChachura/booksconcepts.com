import { Link } from "gatsby"
import styled from "styled-components"

export const Container = styled(Link)`
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

export const Name = styled.p`
  text-align: center;
  font-size: 18px;
  color: ${p => p.theme.color.mainFont};
  margin: 0;
`

export const ImgWrapper = styled.div`
  border: 2px solid transparent;
`

export const Author = styled(Name)`
  color: ${p => p.theme.color.secondaryFont};
  margin-bottom: 10px;
`

export const Minutes = styled(Author)`
  margin-top: 10px;
  font-weight: bold;
`
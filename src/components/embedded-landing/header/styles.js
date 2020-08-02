import styled from 'styled-components'

import { logoStyle } from '../../navbar/styles'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.a`
  ${logoStyle};
  line-height: 1.5em;
  @media(max-width: 560px) {
    font-size: 22px;
  }
`

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  border-radius: 6px;
  color: ${p => p.theme.color.reversedFont};
  background: ${p => p.theme.color.primaryFont};
  border: none;
  cursor: pointer;
  transition: ${p => p.theme.transition.default};
  font-size: 18px;
  text-decoration: none;
  :hover {
    background: ${p => p.theme.color.actionFont};
  }
`
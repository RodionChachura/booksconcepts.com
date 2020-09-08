import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const Placeholder = styled.div`
  width: 100%;
  height: ${p => p.fullNavbar ? 80 : 40}px;
  transition: height .5s;
`

export const Container = styled(Placeholder)`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.5);
  z-index: 1;
`

export const Content = styled.div`
  width: 1320px;
  display: flex;
  align-items: center;
  @media (max-width: 1320px) {
    width: 100%;
    padding: 0 20px;
  }
`

export const logoStyle = css`
  font-weight: bold;
  font-size: 34px;
  text-decoration: none;
  color: ${p => p.theme.color.secondaryFont};
  transition: color 0.3s ease-in, font-size .5s;
  :hover {
    color: ${p => p.theme.color.primaryFont};
  }
`

export const Logo = styled(Link)`
  ${logoStyle};
`

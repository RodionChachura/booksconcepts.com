import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px 40px;
  @media(max-width: 600px) {
    padding: 20px 4vw;
  }
`
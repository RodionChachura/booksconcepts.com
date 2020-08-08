import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Text = styled.h1`
  font-size: 32px;
  color: ${p => p.theme.color.mainFont};
  font-weight: bold;
  text-align: center;
  @media(max-width: 680px) {
    font-size: 22px;
  }
  margin: 40px 0 20px 0;
`

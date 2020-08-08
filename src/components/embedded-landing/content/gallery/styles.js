import styled, { css } from 'styled-components'

export const BOOK_SIDE = 200
export const BOOK_GAP = 20
export const FULL_BOOK_HEIGHT = BOOK_SIDE + BOOK_GAP

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${p => p.fixedHeight ? css`
    height: ${p.fixedHeight}px
  ` : css`
    flex: 1;
  `}
`

export const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, ${BOOK_SIDE}px);
  justify-content: center;
  align-items: center;
  grid-row-gap: ${BOOK_GAP}px;
`

export const BookContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImgWrapper = styled.a`
  cursor: pointer;
  height: ${BOOK_SIDE}px;
  border-radius: 5px;
  overflow: hidden;
  transition: ${p => p.theme.transition.default};
  box-shadow: 0 3px 6px rgba(0,0,0,0.19);
  :hover {
    box-shadow: 0 8px 16px rgba(0,0,0,0.19);
  }
`
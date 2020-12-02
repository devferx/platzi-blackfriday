import styled from '@emotion/styled'

export const ContainerStyled = styled.main`
  height: calc(100vh - 52px);
  display: grid;
  grid-template-columns: 2fr 3fr;
  max-width: 1250px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

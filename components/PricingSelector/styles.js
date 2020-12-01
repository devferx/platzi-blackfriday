import styled from '@emotion/styled'

export const PricingSelectorContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  list-style: none;
  width: 100%;
`

export const PriceButtonContainer = styled.li`
  flex: 1;
`

export const PriceButton = styled.button`
  width: 100%;
  position: relative;
  padding: 12px 16px 8px;
  color: #55485f;
  font-size: 16px;
  font-weight: ${({ active }) => (active ? 700 : 500)};
  text-transform: uppercase;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: ${({ active }) => (active ? '4px' : '1px')};
    background-color: ${({ active }) => (active ? '#98ca3f' : '#bfbfbf')};
  }
`

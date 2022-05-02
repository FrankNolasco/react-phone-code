import styled from 'styled-components';

export const ItemModalListStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0.75em 0.2em;
  box-sizing: border-box;
  background-color: ${({ theme }): string => theme.colors.background};
  color: ${({ theme }): string => theme.colors.text};
  /* border-bottom: 1px solid #dbdfea; */
  cursor: pointer;
  gap: 0.7em;
  img {
    margin: 0 0 0 0.5em;
  }
`;

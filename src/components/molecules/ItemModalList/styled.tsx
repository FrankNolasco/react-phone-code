import styled from 'styled-components';

export const ItemModalListStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: ${({ theme }): string =>
    `calc(${theme.spacing[theme.size || 'md']} * 2) calc(${
      theme.spacing[theme.size || 'md']
    } / 2)`};
  box-sizing: border-box;
  background-color: ${({ theme }): string => theme.colors.background};
  color: ${({ theme }): string => theme.colors.text};
  /* border-bottom: 1px solid #dbdfea; */
  cursor: pointer;
  gap: ${({ theme }): string => theme.spacing[theme.size || 'md']};
  img {
    margin: 0 0 0 ${({ theme }): string => theme.spacing[theme.size || 'md']};
  }
`;

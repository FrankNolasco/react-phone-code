import styled from 'styled-components';
export const Searcher = styled.div``;

export const ButtonSearch = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  &:hover {
    svg {
      fill: ${({ theme }): string => theme.colors.primary};
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
`;

export const ListCountries = styled.div`
  font-family: ${({ theme }): string => theme.fonts.primary};
  font-size: ${({ theme }): string =>
    `calc(${theme.fontSizes[theme.size || 'md']} / 1.3)`};
  height: 60vh;
  overflow-y: auto;
  margin-top: ${({ theme }): string => theme.spacing[theme.size || 'md']};
`;

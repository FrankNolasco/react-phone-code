import styled from 'styled-components';

export const Searcher = styled.div``;

export const ButtonSearch = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  &:hover {
    svg {
      fill: #854fff;
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
  height: 60vh;
  overflow-y: auto;
  margin-top: 20px;
`;

import styled from 'styled-components';
const size = 'md';
export const InputContainer = styled.div`
  display: flex;
  font-family: ${({ theme }): string => theme.fonts.primary};
  font-size: ${({ theme }): string => theme.fontSizes[size]};
  /* width: max-content; */
  flex-direction: row;
  align-items: center;
  border: 1px solid ${({ theme }): string => theme.colors.borders};
  border-radius: ${({ theme }): string => theme.borderRadius[size]};
  box-sizing: border-box;
  padding: ${({ theme }): string => theme.spacing[size]};
  background-color: ${({ theme }): string => theme.colors.background};
  color: ${({ theme }): string => theme.colors.text};
  input,
  input:focus {
    width: 100%;
    border: none;
    outline: 0;
    padding: ${({ theme }): string => `calc( ${theme.spacing[size]} / 2)`};
    color: ${({ theme }): string => theme.colors.text};
    background-color: ${({ theme }): string => theme.colors.background};
  }
  :hover {
    border-color: ${({ theme }): string => theme.colors.primary};
    outline: 0;
    box-shadow: 0 0 0 3px ${({ theme }): string => theme.colors.primary}10;
  }
`;

interface FlagImgProps {
  touchDisable: boolean;
}

export const FlagImg = styled.div<FlagImgProps>`
  padding: 0
    ${({ touchDisable, theme }): string =>
      touchDisable
        ? `calc( ${theme.spacing[size]} / 2)`
        : `calc( ${theme.spacing[size]})`}
    0 0.2em;
  display: flex;

  cursor: ${({ touchDisable }): string =>
    touchDisable ? 'default' : 'pointer'};
  align-items: center;

  img,
  .mark {
    margin: ${({ theme }): string =>
      ` 0 calc(${theme.spacing[size]}) 0 calc( ${theme.spacing[size]} / 2)`};
  }

  .mark {
    fill: ${({ theme }): string => theme.colors.text};
  }
`;

export const ButtonDown = styled.button`
  border: none;
  outline: 0;
  padding: 0;
  color: ${({ theme }): string => theme.colors.secondary};
  display: flex;
  align-items: flex-end;
  align-self: baseline;
  cursor: pointer;
  background-color: transparent;
`;

import styled from 'styled-components';
import { SizeType } from '../../atoms/Modal/styled';
export const InputContainer = styled.div`
  display: flex;
  font-family: ${({ theme }): string => theme.fonts.primary};
  font-size: ${({ theme }): string => theme.fontSizes[theme.size || 'md']};
  /* width: max-content; */
  flex-direction: row;
  align-items: center;
  border: 1px solid ${({ theme }): string => theme.colors.borders};
  border-radius: ${({ theme }): string =>
    theme.borderRadius[theme.size || 'md']};
  box-sizing: border-box;
  padding: ${({ theme }): string => theme.spacing[theme.size || 'md']};
  background-color: ${({ theme }): string => theme.colors.background};
  color: ${({ theme }): string => theme.colors.text};
  .simbol-plus {
    font-size: ${({ theme }): string =>
      `calc(${theme.fontSizes[theme.size || 'md']} * .7)`};
  }
  input,
  input:focus {
    width: 100%;
    border: none;
    outline: 0;
    padding: ${({ theme }): string =>
      `calc( ${theme.spacing[theme.size || 'md']} / 2)`};
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
  size?: SizeType;
}

export const FlagImg = styled.div<FlagImgProps>`
  padding: 0
    ${({ touchDisable, theme }): string =>
      touchDisable
        ? `calc( ${theme.spacing[theme.size || 'md']} / 2)`
        : `calc( ${theme.spacing[theme.size || 'md']})`}
    0 0.2em;
  display: flex;

  cursor: ${({ touchDisable }): string =>
    touchDisable ? 'default' : 'pointer'};
  align-items: center;

  img,
  .mark {
    margin: ${({ theme }): string =>
      ` 0 calc(${theme.spacing[theme.size || 'md']}) 0 calc( ${
        theme.spacing[theme.size || 'md']
      } / 2)`};
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

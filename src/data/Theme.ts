import { SizeType } from '../components/atoms/Modal/styled';

type DefSize = {
  sm: string;
  md: string;
  lg: string;
};
export interface ThemeProps {
  size?: SizeType;
  colors?: { [key: string]: string };
  fonts?: { [key: string]: string };
  borderRadius?: { [key: string]: string };
  spacing?: DefSize;
  fontSizes?: DefSize;
  [key: string]: unknown;
}

export const Theme: ThemeProps = {
  colors: {
    primary: '#854fff',
    secondary: '#854fff',
    text: '#333333',
    background: '#ffffff',
    borders: '#dbdfea',
  },
  fonts: {
    primary: 'Roboto, sans-serif',
  },
  fontSizes: {
    sm: '1rem',
    md: '1.3rem',
    lg: '1.6rem',
  },
  spacing: {
    sm: '.25em',
    md: '0.4em',
    lg: '1em',
  },
  borderRadius: {
    sm: '0.25em',
    md: '0.5em',
    lg: '1em',
  },
};

export const darkTheme = {
  ...Theme,
  colors: {
    ...Theme.colors,
    text: '#dbdfea',
    background: '#333333',
    borders: '#7e7e7e',
  },
};

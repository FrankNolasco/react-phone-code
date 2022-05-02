export const Theme = {
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
    sm: '1.5rem',
    md: '1.2rem',
    lg: '1rem',
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

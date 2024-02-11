import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;
export const lightTheme = {
  body: '#ffffff',
  text: '#000000',
  fontFamily:"'Source Sans Pro', sans-serif",
  bodyRgba : "252, 246, 244",
  textRgba:"0,0,0",
};
export const darkTheme = {
  body: '#000000',
  text: '#f1f1f1',
  fontFamily:"'Source Sans Pro', sans-serif",
  bodyRgba : "252, 246, 244",
  textRgba:"0,0,0",
};
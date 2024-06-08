import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
  }
  * {
    box-sizing: inherit;
  }
`;

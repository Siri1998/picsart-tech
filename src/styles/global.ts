import { DefaultTheme, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
body {
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  transition: background-color 0.3s, color 0.3s;
}
`;

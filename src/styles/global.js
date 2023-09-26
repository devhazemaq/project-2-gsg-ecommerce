import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';


const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: background-color 0.5s;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  background: ${theme.colors.backgroundPrimary};
}

a {
  color: inherit;
  text-decoration: none;
}

`;

export default GlobalStyle;
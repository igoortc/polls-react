import { createGlobalStyle } from "styled-components";

import theme from "../../constants/theme";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%
  }

  body {
    font-family: ${theme.fonts.primary};
    background-color: ${theme.colors.yaleBlue};
  }
`;

export default GlobalStyle;

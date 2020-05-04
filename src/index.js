import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import App from "./App";

import theme from "./utils/constants/theme";
import GlobalStyle from "./utils/assets/style/global";

const store = configureStore();

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

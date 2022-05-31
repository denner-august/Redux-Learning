import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import { Provider } from "react-redux";
import store from "./redux/store";
import GlobalStyle from "./styles/globa";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: mode("#251d35", "#251d35"),
      },
    }),
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App />
        <GlobalStyle />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

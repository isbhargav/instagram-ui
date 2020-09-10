import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";

ReactDOM.render(
  <ThemeProvider>
    <CSSReset />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

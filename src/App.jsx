import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import GlobalStyles from "./styles/GlobalStyles";

import { Header } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;

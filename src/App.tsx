import { ThemeProvider } from "styled-components";
import {BrowserRouter} from 'react-router-dom';

import { GlobalStyle } from "./global/styles";
import { defaultTheme } from "./global/themes";
import { Router } from "./Router";

import {AuthFornecedor} from "./context/AuthContext";

export function App() {

  return (

    <ThemeProvider theme={defaultTheme}>
      <AuthFornecedor>
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
    </AuthFornecedor>
    <GlobalStyle />
  </ThemeProvider>
  )
}

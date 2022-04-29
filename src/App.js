import React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import history from './utils/history';
import { theme } from './assets/styles/theme';
import GlobalStyles from './assets/styles/global';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
      </Router>
    </ThemeProvider>
  );
}

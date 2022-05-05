import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Routes from './routes';
import { theme } from './assets/styles/theme';
import './assets/styles/global.css';
import GlobalProvider from '../src/hooks';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalProvider>
          <Routes />
        </GlobalProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

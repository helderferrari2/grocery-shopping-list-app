import React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Routes from './routes';
import history from './utils/history';
import { theme } from './assets/styles/theme';
import './assets/styles/global.css';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

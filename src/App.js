import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './routes/history';
import GlobalStyles from './assets/styles/global';

export default function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

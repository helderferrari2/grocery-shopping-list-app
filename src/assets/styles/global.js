import { createGlobalStyle } from 'styled-components';

export const theme = {
  text: '#333333',
  textMuted: '#707070',
  background: '#f9fbfd',
  primary: '#7267EF',
  primaryLight: '#F5ECFF',
  secondary: 'red',
  secondaryLight: 'red',
  success: '#48c774',
  successLight: '#effaf3',
  danger: '#f14668',
  dangerLight: '#FFF9FF',
  boxShadow: '0 0.75rem 1.5rem rgba(18 38 63 / 3%)',
};

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100%;
    font-family: "Nunito", sans-serif;
    background: white;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

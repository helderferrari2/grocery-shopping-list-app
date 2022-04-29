import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <>
      <img
        src="https://xaksis.github.io/vue-good-table/vgt-logo.png"
        alt="logo"
      />
      <h1>Go Grocery</h1>
      <p>Sua lista de compras online</p>
      <form>
        <input type="text" placeholder="Digite seu nome" />
        <input type="email" placeholder="Digite seu e-mail" />
        <input type="password" placeholder="Digite sua senha" />
        <button type="submit">Cadastrar</button>
      </form>

      <Link to="/login">Já possui uma conta? Entrar</Link>
    </>
  );
}

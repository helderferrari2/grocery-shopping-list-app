import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function SignUp() {
  const handleSubmit = () => {
    alert('clicou');
  };

  return (
    <>
      <img
        src="https://xaksis.github.io/vue-good-table/vgt-logo.png"
        alt="logo"
      />
      <h1>Go Grocery</h1>
      <p>Sua lista de compras online</p>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Digite seu nome" />
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <Button type="submit">Entrar</Button>
      </form>

      <Link to="/login">Já possui uma conta? Entrar</Link>
    </>
  );
}

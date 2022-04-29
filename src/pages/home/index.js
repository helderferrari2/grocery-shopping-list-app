import React from 'react';
import Input from '../../components/Input';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Input type="text" name="search" placeholder="Pesquise sua lista aqui" />
      <div style={{ border: '2px solid red', height: '50px' }}>Dicas</div>

      <h2>Minhas listas</h2>
      <div
        style={{ border: '2px solid blue', height: '50px', margin: '20px 0' }}
      >
        Lista 1
      </div>
    </>
  );
}

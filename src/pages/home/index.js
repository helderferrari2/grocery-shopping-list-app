import React from 'react';
import CardTips from '../../components/CardTips';
import Input from '../../components/Input';
import CardList from '../../components/CardList';
import Title from '../../components/Title';

export default function Home() {
  const lists = [
    { id: 1, name: 'Lista 1' },
    { id: 2, name: 'Lista 2' },
    { id: 3, name: 'Lista 3' },
    { id: 4, name: 'Lista 4' },
  ];

  return (
    <>
      <CardTips />
      <Title text="Minhas listas" />
      <Input type="text" name="search" placeholder="Pesquise sua lista aqui" />
      {lists.map((list) => (
        <CardList key={list.id} list={list} />
      ))}
    </>
  );
}

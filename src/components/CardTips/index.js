import React from 'react';
import { Wrapper } from './styles';
import CircleImage from '../../assets/images/circle.svg';

export default function CardTips() {
  return (
    <Wrapper>
      <h1>Vai as compras?</h1>
      <p>Confira nossas dicas</p>
      <button type="button">Ver dicas</button>
      <img src={CircleImage} alt="circles" />
    </Wrapper>
  );
}

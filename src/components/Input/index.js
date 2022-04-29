import React from 'react';
import { Wrapper } from './styles';

export default function Input({
  type = 'text',
  name = 'default',
  placeholder = '',
}) {
  return (
    <Wrapper>
      <input type={type} name={name} placeholder={placeholder} />
    </Wrapper>
  );
}

import React from 'react';
import { Wrapper } from './styles';

export default function Button({
  children,
  type = 'button',
  loading = false,
  disabled = false,
}) {
  return (
    <Wrapper type={type === 'submit' ? 'submit' : 'button'} disabled={disabled}>
      {loading ? 'carregando...' : children}
    </Wrapper>
  );
}

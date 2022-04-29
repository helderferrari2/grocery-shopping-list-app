import React from 'react';
import { Wrapper, Content } from './styles';
import Header from '../../../components/Header';
import Container from '../../../components/Container';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  );
}

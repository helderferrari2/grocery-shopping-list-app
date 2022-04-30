import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Wrapper } from './styles';

export default function CardList({ list }) {
  return (
    <Wrapper>
      <Link to="/list/1">
        <h4>{list.name}</h4>
      </Link>
      <button type="button">
        <FiEdit />
      </button>
    </Wrapper>
  );
}

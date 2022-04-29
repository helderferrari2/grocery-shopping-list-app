import React from 'react';
import { useLocation } from 'react-router-dom';
import { FiArrowLeft, FiPlus } from 'react-icons/fi';
import { Nav, NavItem, AddListButton } from './styles';

export default function Header() {
  const location = useLocation();
  const title = 'logo';

  return (
    <Nav>
      <NavItem position="flex-start">
        <FiArrowLeft />
      </NavItem>
      <NavItem>
        <h2>{title}</h2>
      </NavItem>
      <NavItem position="flex-end">
        <AddListButton>
          <FiPlus />
        </AddListButton>
      </NavItem>
    </Nav>
  );
}

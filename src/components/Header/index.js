import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FiArrowLeft, FiPlus } from 'react-icons/fi';
import { Nav, NavItem } from './styles';

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
        <Link to="/lists">
          <FiPlus />
        </Link>
      </NavItem>
    </Nav>
  );
}

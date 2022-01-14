import React from 'react';
import { Link } from 'react-router-dom';
import NavLinkWrapper from './styles';

export default function NavLink({ children, route }) {
  return (
    <NavLinkWrapper>
      <Link to={route}>{children}</Link>
    </NavLinkWrapper>
  );
}

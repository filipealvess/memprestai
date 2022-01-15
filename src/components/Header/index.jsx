import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon } from 'react-feather';
import HeaderWrapper, { HeaderContent, MenuButton, Menu, NavLinks } from './styles';
import Logo from '../Logo';
import NavLink from '../NavLink';

export default function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  function handleMenuButtonClick() {
    setMenuIsVisible(!menuIsVisible);
  }

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Link to="/">
          <Logo />
        </Link>

        <Menu>
          <MenuButton onClick={handleMenuButtonClick}>
            <MenuIcon />
          </MenuButton>

          <NavLinks isVisible={menuIsVisible}>
            <NavLink route="/clientes">Clientes</NavLink>
            <NavLink route="/filmes">Filmes</NavLink>
          </NavLinks>
        </Menu>
      </HeaderContent>
    </HeaderWrapper>
  );
}

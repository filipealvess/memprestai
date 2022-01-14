import styled from 'styled-components';

const HeaderWrapper = styled.header`
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Menu = styled.nav`
  position: relative;
`;

export const NavLinks = styled.ul`
  display: flex;
  
  @media (max-width: 600px) {
    display: ${({ isVisible }) => isVisible ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    min-width: 150px;
    border: 1px solid #E6E6E6;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const MenuButton = styled.button`
  display: none;
  padding: 5px;
  
  @media (max-width: 600px) {
    display: unset;
  }
`;

export default HeaderWrapper;

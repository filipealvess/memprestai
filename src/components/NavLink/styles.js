import styled from "styled-components";

const NavLinkWrapper = styled.li`
  display: flex;
  position: relative;
  
  & + & { margin-left: 10px; }
  
  & > a { padding: 10px; }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 20px;
    height: 3px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.blue};
    opacity: 0;
    transform: translateX(-50%);
    transition: 0.3s opacity;
  }
  
  &:hover::after { opacity: 1; }
  
  @media (max-width: 600px) {
    & + & { margin-left: 0; }

    & > a { width: 100%; transition: 0.2s color; }

    &:hover > a { color: ${({ theme }) => theme.colors.blue}; }

    &::after { display: none; }
  }
`;

export default NavLinkWrapper;

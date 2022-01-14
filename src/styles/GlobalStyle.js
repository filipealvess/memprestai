import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fontFamily};
    list-style: none;
    box-sizing: border-box;
  }
  
  button {
    cursor: pointer;
  }
  
  html { font-size: 10px; }
  
  body {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export default GlobalStyle;

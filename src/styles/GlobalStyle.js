import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    background-color: transparent;
    text-decoration: none;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fontFamily};
    list-style: none;
    box-sizing: border-box;
  }
  
  button {
    cursor: pointer;
  }

  a {
    color: ${({ theme }) => theme.colors.blue};
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  html { font-size: 10px; }
  
  body {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export default GlobalStyle;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppRoutes from './routes';
import GlobalStyle from './styles/GlobalStyle';
import appTheme from './styles/AppTheme';

export default function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

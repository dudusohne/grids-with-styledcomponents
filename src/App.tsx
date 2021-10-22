import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GridSettings } from './components/Grid';
import { GridHeadQuarters } from './pages/GridHeadQuarters';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <ThemeProvider theme={GridSettings}>
      <GridHeadQuarters />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

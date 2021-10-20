import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GridSettings } from './components/Grid';
import { GridHeadQuarters } from './pages/GridHeadQuarters';

function App() {
  return (
    <ThemeProvider theme={GridSettings}>
      <GridHeadQuarters />
    </ThemeProvider>
  );
}

export default App;

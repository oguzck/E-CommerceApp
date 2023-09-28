import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Product } from '../models/product';
import Catalog from '../../features/catalog/Catalog';
import { Container, CssBaseline, ThemeProvider, Typography, createTheme } from '@mui/material';
import Header from './Header';

function App() {
  const [darkmode, setDarkmode] = useState<boolean>(false)
  const paletteType = darkmode ? 'dark' : 'light'
  const theme = createTheme({
    palette:{
      mode:paletteType,
      background :{
        default:paletteType ==='light' ? '#eaeaea' : '#121212'
      }
    }

  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header setDarkMode={setDarkmode} darkMode={darkmode}  />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;

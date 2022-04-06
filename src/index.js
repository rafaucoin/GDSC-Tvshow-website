import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Quizz from './Quizz';
import theme from './styles/theme';


ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="light" />{' '}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="quizz" element={<Quizz />}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);


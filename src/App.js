import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  Input
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Layout from './components/Layout'
import style from './styles.css'
import { BrowserRouter, Routes } from 'react-router-dom';
function App() {
  return (
    

    <Flex className="container" h="100vh" justifyContent="center" align="center">
      <Box w={{ base: '70%', md: '25%'}} height="20%">

      <Input height="100%" bg="gray" borderColor="black"  placeholder='Enter Your Name...' />
      </Box>
    </Flex>
  );
}

export default App;

import React from 'react';
import {
  Box,
  Flex,
  Input,
  FormControl,
  FormLabel
} from '@chakra-ui/react';
import style from './styles/styles.css'
import { BrowserRouter, Routes, useNavigate } from 'react-router-dom';
function App() {
  const navigate = useNavigate()
  return (
    <Flex className="container" h="100vh" justifyContent="center" align="center">
      <Box w={{ base: '70%', md: '25%'}} height="40%">
        <form className="form" onSubmit={()=> navigate(`/quizz`)}>
          <FormControl height="30%"  color="black">
          <FormLabel fontSize="2xl"  htmlFor='UserName'>Username</FormLabel>
          <Input
            bg="teal"
            height="100%"
            placeholder='Enter Your Username...'
            fontSize="3xl"
            fontWeight="bold"
            />
          </FormControl>
        </form>
      </Box>
    </Flex>
  );
}

export default App;

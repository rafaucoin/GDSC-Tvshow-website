import {
  VStack,
  Box,
  Flex,
  Avatar,
  AvatarBadge,
  Icon,
  Image,
  Heading,
  HStack,
  Grid,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import style from './styles.css';
import logo from './image.png';
import Video from './components/Video';
import Question from './components/Question';
import { useState } from 'react';
import { FaMicrophoneSlash, FaMicrophone } from 'react-icons/fa';
import { MdVideocam, MdVideocamOff } from 'react-icons/md';

function Quizz() {
  const [mic, setMic] = useState(false);
  const [video, setVideo] = useState(false);

  return (
    <Flex
      className="container"
      flexDirection="column"
      w="100%"
      h="100vh"
      align="flex-start"
      gap={4}
    >
      <Flex p={4} h="8%" w="100%" align="center">
        <Image src={logo} alt="Dan Abramov" />
        <Box marginLeft="65%">
          <Heading size="2xl" color="red.500" letterSpacing="tight">
            00:30
          </Heading>
        </Box>
      </Flex>
      <Flex h="40%" justifyContent="space-around" w="100%">
        <Video />
        <Question />

        <Video />
      </Flex>
      <Flex w="100%" h="100%" justifyContent="center">
        <Grid
          w="90%"
          templateColumns="repeat(4, 1fr)"
          templateRow="repeat(2, 1fr)"
          align="center"
          gap={2}
        >
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
        </Grid>
        <Flex
          width="5%"
          justifyContent="center"
          flexDirection="column"
          align="center"
        >
          <IconButton
            fontSize="3xl"
            h="30%"
            w="100%"
            color="Red"
            onClick={() => setMic(!mic)}
            icon={mic === false ? <FaMicrophoneSlash /> : <FaMicrophone />}
          />
          <IconButton
            fontSize="3xl"
            h="30%"
            w="100%"
            color="Red"
            onClick={() => setVideo(!video)}
            icon={video === false ? <MdVideocamOff /> : <MdVideocam />}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Quizz;

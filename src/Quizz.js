import {
  Box,
  Flex,
  Image,
  Heading,
  IconButton,
  LightMode,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import style from './styles/styles.css';
import logo from './assets/image.png';
import Video from './components/Video';
import Question from './components/Question';
import { useState, useEffect } from 'react';
import { FaMicrophoneSlash, FaMicrophone } from 'react-icons/fa';
import { MdVideocam, MdVideocamOff } from 'react-icons/md';

function Quizz() {
  const [mic, setMic] = useState(false);
  const [video, setVideo] = useState(false);
  const [counter, setCounter] = React.useState(30);
  const [state, setstate] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  function handleBuzzer() {
    state &&
      counter > 0 &&
      setTimeout(() => {
        if (counter === 1) {
          setCounter(31);
          setstate(false);
        }
        setCounter(counter - 1);
      }, 1000);
  }
  state && handleBuzzer();
  return (
    <LightMode>
      <Flex
        className="container"
        flexDirection="column"
        w="100%"
        h="100vh"
        align="flex-start"
        gap={4}
        letterSpacing="tight"
      >
        <Flex p={4} h="8%" w="100%" align="center">
          <Image src={logo} alt="Dan Abramov" />
          <Box marginLeft="65%">
            <Heading size="2xl" color="red.500" letterSpacing="tight">
              {`00:`}
              {counter < 10 ? `0${counter}` : counter}
            </Heading>
          </Box>
        </Flex>

        <Flex h="89.9%" w="100%" gap={4} px={4}>
          <Flex
            w="20%"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            h="100%"
          >
            <Video isHost="HOST" />
            <Flex
              width="100%"
              height="50%"
              flexDirection="column"
              align="center"
            >
              <IconButton
                fontSize="3xl"
                h="30%"
                w="40%"
                color="Red"
                onClick={() => setMic(!mic)}
                icon={mic === false ? <FaMicrophoneSlash /> : <FaMicrophone />}
                _focus={{ bg: 'white' }}
                backgroundColor="white.900"
                mb={10}
              />
              <IconButton
                fontSize="3xl"
                h="30%"
                w="40%"
                color="Red"
                onClick={() => setVideo(!video)}
                _focus={{ bg: 'white' }}
                backgroundColor="white.900"
                icon={video === false ? <MdVideocamOff /> : <MdVideocam />}
              />
            </Flex>
          </Flex>
          <Flex h="100%" w="60%" justifyContent="center">
            <Question active={state} buzzer={setstate} run={handleBuzzer} />
          </Flex>
          <Flex h="100%" w="20%" alignItems="flex-start">
            <Video />
          </Flex>
          <Flex
            w="20%"
            alignItems="flex-start"
            flexDirection="column"
            h="95%"
            overflowY="scroll"
          >
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
          </Flex>
        </Flex>
      </Flex>
    </LightMode>
  );
}

export default Quizz;

import { Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import avatar from '../avatar.svg';

function Video({ isHost, video }) {
  return (
    <Flex
      w="100%"
      h="fit"
      justifyContent="center"
      flexDirection="column"
      color="black"
    >
      <Image src={avatar} />

      <Flex flexDirection="column" align="center">
        <Heading fontSize="lg">Flen Lfouleni</Heading>
        <Text color="gray">{isHost === 'HOST' ? 'HOST' : 'Score: 00'}</Text>
      </Flex>
    </Flex>
  );
}

export default Video;

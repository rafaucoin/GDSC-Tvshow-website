import { Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import avatar from '../avatar.svg';
function Video() {
  return (
    <Flex
      w={270}
      h="100%"
      justifyContent="center"
      flexDirection="column"
      color="black"
    >
      <Image src={avatar} />

      <Flex flexDirection="column" align="center">
        <Heading fontSize="lg">Flen Lfouleni</Heading>
        <Text color="gray">Score: 00</Text>
      </Flex>
    </Flex>
  );
}

export default Video;

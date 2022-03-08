import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
function Question() {
  return (
    <Flex width="50%" gap={3} h="100%" justifyContent="space-between">
      <Flex
        width="90%"
        align="flex-start"
        h="100%"
        flexDirection="column"
        color="black"
      >
        <Flex h="40%" w="100%" align="center" gap={2} zIndex="100" pl={2}>
          <Box h="100%" w="fit" p={2} backgroundColor="red" rounded={5}>
            <Text>Question n" X</Text>
          </Box>
          <Icon as={AiFillStar} color="yellow" fontSize="lg" />
          <Icon as={AiFillStar} color="yellow" fontSize="lg" />
          <Icon as={AiFillStar} color="yellow" fontSize="lg" />
        </Flex>
        <Flex
          h="80%"
          w="100%"
          backgroundColor="yellow.400"
          zIndex="0"
          marginTop="-10px"
          p={4}
          justifyContent="center"
          alignItems="center"
          rounded={5}
          mb={5}
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
            varius elementum elementum hendrerit justo arcu.
          </Text>
        </Flex>
        <Grid
          templateColumns="repeat(2, 1fr)"
          templateRow="repeat(2, 1fr)"
          gap={6}
          height="100%"
          width="100%"
        >
          <Button
            _hover={{ bg: 'blue.900' }}
            _focus={{ bg: 'blue.900' }}
            backgroundColor="blue"
          >
            Answer
          </Button>
          <Button
            _hover={{ bg: 'blue.900' }}
            _focus={{ bg: 'blue.900' }}
            backgroundColor="blue"
          >
            Answer
          </Button>
          <Button
            _hover={{ bg: 'blue.900' }}
            _focus={{ bg: 'blue.900' }}
            backgroundColor="blue"
          >
            Answer
          </Button>
          <Button
            _hover={{ bg: 'blue.900' }}
            _focus={{ bg: 'blue.900' }}
            backgroundColor="blue"
          >
            Answer
          </Button>
        </Grid>
      </Flex>
      <Button
        rounded="50%"
        height="50%"
        width="20%"
        marginTop="auto"
        backgroundColor="red"
        _hover={{ bg: 'red.600' }}
        _focus={{ bg: 'red.600' }}
      >
        BUZZER
      </Button>
    </Flex>
  );
}

export default Question;

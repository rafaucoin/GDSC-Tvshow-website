import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import buzzerIcon from '../buzzerIcon.svg';
import img from '../jason-leung-Xaanw0s0pMk-unsplash.jpg';
function Question({ buzzer, run, active }) {
  const basicBoxStyles = {
    boxShadow: '1px 5px 5px black',
  };
  return (
    <Flex width="90%" gap={3} h="fit" justifyContent="center">
      <Flex
        width="100%"
        align="flex-start"
        justifyContent="center"
        h="100%"
        flexDirection="column"
        color="black"
      >
        <Flex height="fit" flexDirection="column" width="100%">
          <Flex h="70%" w="100%" align="center" gap={2} zIndex="100" pl={2}>
            <Flex
              h="100%"
              w="fit"
              p={2}
              backgroundColor="primary"
              rounded={5}
              classname="box"
              align="center"
            >
              <Text>Question n" X</Text>
            </Flex>
            <Icon as={AiFillStar} color="starColor" fontSize="2xl" />
            <Icon as={AiFillStar} color="starColor" fontSize="2xl" />
            <Icon as={AiFillStar} color="starColor" fontSize="2xl" />
          </Flex>
          <Flex
            color="white"
            h="100%"
            w="100%"
            backgroundColor="#FBBC04"
            zIndex="0"
            marginTop="-10px"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            rounded={5}
            mb={5}
            p={2}
            // boxShadow="xl"
            className="question"
          >
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              varius elementum elementum hendrerit justo arcu.
            </Text>

            {/* <Image height="50%" src={img} /> */}
          </Flex>
        </Flex>
        <Flex
          height="20vh"
          width="100%"
          flexDirection="row"
          justifyContent="space-between"
          mb={3}
        >
          <Grid
            templateColumns="repeat(2, 1fr)"
            templateRow="repeat(4, 1fr)"
            gap={6}
            height="100%"
            width="80%"
            color="white"
          >
            <Button
              _hover={{ bg: 'blue.200' }}
              rowSpan={2}
              _focus={{ bg: 'red' }}
              backgroundColor="blue"
              id={1}
              height="100%"
              isDisabled={!active}
              _disabled={{ bg: 'blue.200' }}
            >
              Answer
            </Button>
            <Button
              id={2}
              isDisabled={!active}
              _hover={{ bg: 'blue.200' }}
              rowSpan={2}
              height="100%"
              _focus={{ bg: 'red' }}
              _disabled={{ bg: 'blue.200' }}
              backgroundColor="blue"
            >
              Answer
            </Button>
            <Button
              id={3}
              isDisabled={!active}
              height="100%"
              _hover={{ bg: 'blue.200' }}
              rowSpan={2}
              _focus={{ bg: 'red' }}
              _disabled={{ bg: 'blue.200', cursor: 'none' }}
              backgroundColor="blue"
            >
              Answer
            </Button>
            <Button
              id={4}
              height="100%"
              isDisabled={!active}
              _hover={{ bg: 'blue.200' }}
              rowSpan={2}
              _focus={{ bg: 'red' }}
              _disabled={{ bg: 'blue.200' }}
              backgroundColor="blue"
            >
              Answer
            </Button>
          </Grid>
          <IconButton
            rounded="50%"
            height="15vh"
            width="17%"
            marginTop="auto"
            backgroundColor="red"
            _hover={{ bg: 'red' }}
            _focus={{ backgroundColor: 'red' }}
            onClick={() => {
              run();
              buzzer(true);
            }}
            isDisabled={active}
            classname="buzzer"
            sx={!active ? basicBoxStyles : ''}
            icon={
              <svg
                width="97"
                height="57"
                viewBox="0 0 97 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M63.762 27.6132L79.7703 18.637C81.801 17.4983 83.959 17.2035 85.9185 17.6354L61.9418 4.19111C57.1882 1.5257 51.7374 3.48402 49.767 8.56514C47.7966 13.6463 50.0528 19.9261 54.8063 22.5915L63.762 27.6132Z"
                  fill="white"
                />
                <rect
                  width="47.2324"
                  height="19.7355"
                  rx="9.86773"
                  transform="matrix(-0.872237 0.489084 -0.361556 -0.932351 96.3333 33.5965)"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.57031 39.3988C9.12759 39.8929 9.7372 40.3307 10.3946 40.6993L32.3588 53.0151C37.1123 55.6805 42.5631 53.7222 44.5335 48.6411C46.5039 43.56 44.2477 37.2802 39.4942 34.6147L30.6812 29.6731L15.0015 38.4651C12.8725 39.6589 10.6037 39.9252 8.57031 39.3988Z"
                  fill="white"
                />
                <rect
                  width="47.2324"
                  height="19.7355"
                  rx="9.86773"
                  transform="matrix(-0.872237 0.489084 -0.361556 -0.932351 48.3333 18.4004)"
                  fill="white"
                />
              </svg>
            }
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Question;

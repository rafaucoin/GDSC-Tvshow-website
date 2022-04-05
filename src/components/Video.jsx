import { Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import avatar from '../avatar.svg';
import { Video as Vid } from 'react-video-stream';
const url = 'http://example.com/manifest.mpd';

const options = {
  requestHeader: 'Authorization',
  requestToken: 'access_token',
};
function Video({ isHost, video }) {
  return (
    <Flex
      w="100%"
      h="fit"
      justifyContent="center"
      flexDirection="column"
      color="black"
    >
      <Vid
        className="video-class"
        controls={true}
        autoPlay={true}
        options={options}
        remoteUrl={url}
      />
    </Flex>
  );
}

export default Video;

import { Flex, Box, Image, Text, Button, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const BgProps = {
  height: '100vh',
  width: '100%',
  pos: 'absolute',
  zIndex: '0',
} as any;

const HeaderMenuProps = {
  fontFamily: 'robo',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '18px',
  color: 'black',
};
const FirstSection = () => {
  const router = useRouter();
  return (
    <Flex h="100vh">
      <Box zIndex="1" w="100vw" h="100vh" bg="#00000033" pos="absolute" />
      <Image src="family.jpg" alt="bg" {...BgProps} />
      <Stack zIndex="2">
        <Flex w="100vw" mt="10px" h="40px" align="center">
          <Flex flexGrow="1" justify="center" gap="40px">
            <Text
              {...HeaderMenuProps}
              transition="all .5s ease-in-out"
              _hover={{
                transform: 'scale(1.2)',
                transition: 'all .5s  ease-in-out',
                cursor: 'pointer',
                //   borderBottom: '1px solid black',
              }}
            >
              <a href="#section2">COMPANY</a>
            </Text>
            <Text
              {...HeaderMenuProps}
              transition="all .5s ease-in-out"
              _hover={{
                transform: 'scale(1.2)',
                transition: 'all .5s ease-in-out',
              }}
            >
              ABOUT US
            </Text>
            <Text
              {...HeaderMenuProps}
              transition="all .5s ease-in-out"
              _hover={{
                transform: 'scale(1.2)',
                transition: 'all .5s ease-in-out',
              }}
            >
              SERVICES
            </Text>
            <Text
              {...HeaderMenuProps}
              transition="all .5s ease-in-out"
              _hover={{
                transform: 'scale(1.2)',
                transition: 'all .5s ease-in-out',
              }}
            >
              CONTACT US
            </Text>
          </Flex>
          <Flex pr="50px">
            <Button
              transition="all .5s ease-in-out"
              onClick={() => router.push('/login')}
              _hover={{
                transform: 'scale(1.1)',
                transition: 'all .5s ease-in-out',
              }}
            >
              Login
            </Button>
          </Flex>
        </Flex>
        <Flex w="100vw" align="center" h="200px" justify="center">
          <Text
            fontSize="52px"
            fontWeight="bolder"
            textShadow="5px 5px #558abb"
          >
            WELCOME TO HOLY
          </Text>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default FirstSection;

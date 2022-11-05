import React from 'react';
import {
  Box,
  Flex,
  Icon,
  Text,
  Avatar,
  MenuList,
  MenuButton,
  Menu,
  MenuItem,
} from '@chakra-ui/react';
import { AiFillBell } from 'react-icons/ai';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';

const FosterNavbar = () => {
  const router = useRouter();

  return (
    <Flex
      h="10vh"
      bg="main"
      shadow="md"
      justify="start"
      align="center"
      w="100vw"
    >
      <Flex justifyContent="space-between" align="center" w="inherit" mx="20px">
        <Text>LOGO</Text>
        <Flex align="center" gap="30px">
          <Icon as={AiFillBell} w="20px" h="20px" />
          <Box w="1px" bg="gray" h="30px" opacity=".5" />
          <Text
            fontFamily="opensans"
            fontSize="SubHeader.lg"
            fontWeight="semibold"
          >
            Foster Bond
          </Text>
          <Menu>
            <MenuButton
              _hover={{
                transform: 'scale(1.05)',
                transition: 'all .5s ease-in-out',
              }}
              transition="all .5s ease-in-out"
            >
              <Flex justify="center" align="center" mr="20px">
                <Avatar
                  fontFamily="lexendDeca"
                  name="James Bond"
                  src="https://bit.ly/dan-abramov"
                  h="50px"
                  w="50px"
                />
              </Flex>
            </MenuButton>
            <MenuList minW="100px">
              <MenuItem>Profile</MenuItem>
              <MenuItem
                onClick={() => {
                  cookie.remove('token');
                  router.push('/');
                }}
              >
                Log out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FosterNavbar;

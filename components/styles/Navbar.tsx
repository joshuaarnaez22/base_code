import React, { useEffect, useState } from 'react';
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
import jwt_decode from 'jwt-decode';
import { Capitalize } from '@/services/helpers';

const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState('test');
  useEffect(() => {
    const { fullname }: { fullname: string } = jwt_decode(
      cookie.get('token') as string,
    );
    setUser(fullname);
  }, []);

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
          <Text fontFamily="robo" fontSize="SubHeader.lg" fontWeight="semibold">
            {user.toUpperCase()}
          </Text>
          <Menu>
            <MenuButton
              _hover={{
                transform: 'scale(1.05)',
                transition: 'all .5s ease-in-out',
              }}
              transition="all .5s ease-in-out"
              outline="transparent"
            >
              <Avatar fontFamily="robo" name={user} src="" mr="20px" />
            </MenuButton>
            <MenuList minW="100px">
              <MenuItem>Profile</MenuItem>
              <MenuItem
                onClick={() => {
                  cookie.remove('token');
                  router.push('/login');
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

export default Navbar;

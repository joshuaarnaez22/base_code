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
  Image,
} from '@chakra-ui/react';
import { AiFillBell } from 'react-icons/ai';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import jwt_decode from 'jwt-decode';
import { Capitalize } from '@/services/helpers';
import { getAllUnread } from '@/services/user.service';

const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState('test');
  const [totalUnread, setTotalUnread] = useState(0);
  useEffect(() => {
    const { fullname, role }: { fullname: string; role: string } = jwt_decode(
      cookie.get('token') as string,
    );
    setUser(fullname);
    getTotal();
  }, []);

  const getTotal = async () => {
    const response = await getAllUnread();
    setTotalUnread(response.total);
  };

  const handleNavigate = () => {
    router.push(
      { pathname: 'inquiries', query: { status: 'unread' } },
      'inquiries',
    );
  };

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
        <Image src="/logo60.png" alt="logo" />
        <Flex align="center" gap="30px">
          <Flex
            pos="relative"
            transition="all 0.5s ease"
            _hover={{
              cursor: 'pointer',
              transform: 'scale(1.1)',
              transition: 'all 0.5s ease',
            }}
            onClick={handleNavigate}
          >
            <Icon as={AiFillBell} w="20px" h="20px" zIndex="2" />
            <Text
              color="red"
              pos="absolute"
              top="-14px"
              right="-5px"
              fontWeight="bold"
            >
              {totalUnread}
            </Text>
          </Flex>
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

export default React.memo(Navbar);

import React, { useEffect, useState } from 'react';
import { Text, Flex, Image, Icon } from '@chakra-ui/react';
import { MdOutlineDashboard, MdSchedule } from 'react-icons/md';
import { useRouter } from 'next/router';

export default function FosterSideMenu() {
  const [selectedMenu, setSelectedMenu] = useState(1);
  const router = useRouter();
  const routerChoice = ['/foster/dashboard', '/foster/schedule'];

  useEffect(() => {
    if (router.pathname === routerChoice[0]) setSelectedMenu(1);
    if (router.pathname === routerChoice[1]) setSelectedMenu(2);
  }, [router]);

  const MenuOptions = ({ icon, title, isSelected, index, route }: any) => {
    return (
      <Flex
        _hover={{
          borderLeft: '5px solid white',
          cursor: 'pointer',
          bg: 'rgba(0, 0, 0, 0.5)',
          transition: 'all .5s ease',
          opacity: '1',
        }}
        onClick={() => {
          setSelectedMenu(index);
          router.push(route);
        }}
        bg={isSelected && 'rgba(0, 0, 0, 0.5)'}
        borderLeft={isSelected && '5px solid white'}
        opacity={isSelected ? '1' : '.5'}
        transition="all .3s ease"
        align="center"
        gap="15px"
        h="56px"
      >
        <Icon as={icon} h="16px" w="16px" ml="20px" color="#DDE2FF" />
        <Text
          zIndex="9999"
          fontFamily="robo"
          fontSize="16px"
          fontWeight="normal"
          color="white"
        >
          {title}
        </Text>
      </Flex>
    );
  };

  return (
    <Flex w="18vw" h="90vh" bg="#363740" direction="column">
      <Flex justify="center" align="start" gap="10px" py="30px" w="inherit">
        <Image src="/logo.png" alt="logo" h="32px" w="32px" />
        <Text
          fontFamily="mulish"
          fontSize="19px"
          fontWeight="700"
          color="white"
          pt="5px"
        >
          Holy
        </Text>
      </Flex>
      <Flex direction="column" mt="15px">
        <MenuOptions
          title="Dashboard"
          icon={MdOutlineDashboard}
          index={1}
          isSelected={selectedMenu == 1 ? true : false}
          route={routerChoice[0]}
        />
        <MenuOptions
          title="Accounts"
          icon={MdSchedule}
          index={2}
          isSelected={selectedMenu == 2 ? true : false}
          route={routerChoice[1]}
        />
      </Flex>
    </Flex>
  );
}

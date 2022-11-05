import React from 'react';
import { Text, Flex, Image, Icon } from '@chakra-ui/react';
import { MdOutlineDashboard, MdSchedule } from 'react-icons/md';
import { IMenu } from '@/services/types';

export default function FosterSideMenu() {
  const menus: IMenu[] = [
    { title: 'Dashboard', icon: MdOutlineDashboard },
    { title: 'Schedule', icon: MdSchedule },
  ];
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
        {menus.map(({ title, icon }: any, index: number) => {
          return (
            <Flex
              key={index}
              _hover={{
                borderLeft: '5px solid white',
                cursor: 'pointer',
                bg: 'rgba(0, 0, 0, 0.5)',
                transition: 'all .5s ease',
                opacity: '1',
              }}
              opacity=".5"
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
        })}
      </Flex>
    </Flex>
  );
}

import React from 'react';
import {
  Box,
  Flex,
  Text,

} from '@chakra-ui/react';
import { hideScollbar } from '@/components/Scrollbar';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';

// const BgProps = {
//   height: '100vh',
//   width: '100%',
//   pos: 'absolute',
//   zIndex: '0',
// } as any;

// const HeaderMenuProps = {
//   fontFamily: 'robo',
//   fontSize: 'SubHeader.lg',
//   fontWeight: 'normal',
//   cursor: 'pointer',
// };
const Website = ({ resources }: any) => {
  return (
    <>
      <Box
        h="100vh"
        overflowY="auto"
        overflowX="hidden"
        scrollBehavior="smooth"
        sx={hideScollbar}
        pos="relative"
        m="0"
        p="0"
        w="100vw"
      >
        <FirstSection />
        <SecondSection />
        <ThirdSection resources={resources} />

        <Flex>
          <Flex
            bg="black"
            h="100px"
            w="100vw"
            gap="20px"
            justify="center"
            align="center"
          >
            <Text color="white">F</Text>
            <Text color="white">o</Text>
            <Text color="white">o</Text>
            <Text color="white">t</Text>
            <Text color="white">e</Text>
            <Text color="white">r</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Website;

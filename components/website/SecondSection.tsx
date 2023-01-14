import { Flex, Text, Button } from '@chakra-ui/react';
import React from 'react';

const SecondSection = () => {
  return (
    <>
      <Flex
        direction="column"
        gap="100px"
        pt="50px"
        justify="center"
        align="center"
        id="services"
      >
        {/* <Button
          w="200px"
          h="50px"
          borderRadius="full"
          bg="black500"
          color="white"
          _hover={{
            color: 'black',
            bg: 'gray300',
            transform: 'scale(1.1)',
            transition: 'all 0.5s ease-in-out',
          }}
        >
          Request
        </Button> */}
        <Text fontFamily="robo" fontWeight="extranormal" fontSize="30px">
          Our Services
        </Text>
      </Flex>
    </>
  );
};

export default SecondSection;

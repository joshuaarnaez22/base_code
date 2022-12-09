import { Flex, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';
const ThirdSection = ({ resources }: any) => {
  return (
    <>
      <Flex
        justify="center"
        align="center"
        flexWrap="wrap"
        gap="20px"
        pt="50px"
        pb="100px"
      >
        {resources.map(({ img, title, description }: any, index: number) => {
          return (
            <Flex
              key={index}
              direction="column"
              w="400px"
              shadow="xl"
              pl="40px"
              py="30px"
              pr="30px"
              h="300px"
              gap="20px"
              // _hover={{
              //   transform: 'rotateY(90deg)',
              // }}
              // transition="all 1s ease"
            >
              <Image src={img} alt="" w="50px" h="50px" />
              <Text>{title}</Text>
              <Text>{description}</Text>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
};

export default ThirdSection;

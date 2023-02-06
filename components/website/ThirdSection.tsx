import { Box, Collapse, Flex, Grid, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

const Card = ({ img, name, value }: any) => {
  const [show, SetShow] = useState(false);
  return (
    <Flex
      direction="column"
      w="400px"
      shadow="xl"
      pl="40px"
      py="30px"
      pr="30px"
      gap="20px"
      onClick={() => SetShow(!show)}
    >
      <Image src="mapcursor.png" alt="" w="50px" h="50px" />
      <Text>{name}</Text>
      <Text>{value}</Text>
      {/* <Collapse in={show}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
        labore wes anderson cred nesciunt sapiente ea proident.
      </Collapse> */}
    </Flex>
  );
};
const ThirdSection = ({ allServices }: any) => {
  console.log(allServices);
  return (
    <>
      <Text
        fontFamily="robo"
        fontWeight="bold"
        fontSize="30px"
        textAlign="center"
        mt="100"
      >
        Our Services
      </Text>
      <Flex
        justify="center"
        align="center"
        flexWrap="wrap"
        gap="20px"
        pt="50px"
        pb="100px"
      >
        <Box>
          {allServices.map(({ img, name, value }: any, index: number) => {
            return (
              <Box key={index}>
                <Card {...{ img, name, value }} />
              </Box>
            );
          })}
        </Box>
      </Flex>
    </>
  );
};

export default ThirdSection;

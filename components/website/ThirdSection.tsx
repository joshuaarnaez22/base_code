import { Box, Collapse, Flex, Grid, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

const Card = ({ img, title, description }: any) => {
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
      <Image src={img} alt="" w="50px" h="50px" />
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Collapse in={show}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
        labore wes anderson cred nesciunt sapiente ea proident.
      </Collapse>
    </Flex>
  );
};
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
            <Box key={index}>
              <Card {...{ img, title, description }} />
            </Box>
          );
        })}
      </Flex>
    </>
  );
};

export default ThirdSection;

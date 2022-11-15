import { Flex, Stack, Text, Icon, Box, Grid } from '@chakra-ui/react';
import React from 'react';
import { IoIosPeople } from 'react-icons/io';
const flexstyle = {
  borderRadius: '20px',
  align: 'center',
  justify: 'center',
  p: '20px',
  h: '130px',
  shadow: 'lg',
  maxW: '300px',
};

type TDashboard = {
  icon: any;
  title: string;
  total: number;
};

const Card = ({ icon, title, total }: TDashboard) => {
  return (
    <Flex {...flexstyle}>
      <Box h="50px" w="50px">
        <Icon as={icon} h="inherit" w="inherit" />
      </Box>
      <Stack align="center" p="10px">
        <Text fontSize="Header.xs" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="25px" fontWeight="bold">
          {total}
        </Text>
      </Stack>
    </Flex>
  );
};
const AdminDashboard = ({ response }: any) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)">
      {response.map(({ name, total }: any, index: number) => {
        return (
          <Box key={index}>
            <Card icon={IoIosPeople} title={name} total={total} />
          </Box>
        );
      })}
    </Grid>
  );
};

export default AdminDashboard;

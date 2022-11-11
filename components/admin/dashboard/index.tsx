import { Flex, Stack, Text, Icon, Box } from '@chakra-ui/react';
import React from 'react';
import { IoIosPeople } from 'react-icons/io';
const flexstyle = {
  borderRadius: '20px',
  align: 'center',
  justify: 'center',
  p: '30px',
  h: '100px',
  shadow: 'lg',
};

type TDashboard = {
  icon: any;
  title: string;
  total: number;
};

const Card = ({ icon, title, total }: TDashboard) => {
  return (
    <Flex justify="space-between">
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
    </Flex>
  );
};
const AdminDashboard = () => {
  return (
    <Flex>
      <Card icon={IoIosPeople} title="Orphans Registered" total={30} />
    </Flex>
  );
};

export default AdminDashboard;

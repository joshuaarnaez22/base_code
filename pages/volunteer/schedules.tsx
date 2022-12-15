import { thinScollbar } from '@/components/Scrollbar';
import { Box } from '@chakra-ui/react';
import Layout from 'layouts/Layout';
import React, { ReactElement } from 'react';

const schedules = () => {
  return (
    <Box
      w="100%"
      h="90vh"
      overflowY="auto"
      mx="20px"
      sx={thinScollbar}
      p="20px"
    >
      Schedules
    </Box>
  );
};
schedules.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="volunteer">{page}</Layout>;
};

export default schedules;

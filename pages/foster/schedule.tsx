import React, { ReactElement } from 'react';
import Layout from 'layouts/Layout';
import { NextPageWithLayout } from 'pages/_app';
import Index from '@/components/foster/schedule';
import { Box } from '@chakra-ui/react';
import { thinScollbar } from '@/components/Scrollbar';

const schedule: NextPageWithLayout = () => {
  return (
    <Box
      w="100%"
      h="90vh"
      overflowY="auto"
      mx="20px"
      sx={thinScollbar}
      p="20px"
    >
      <Index />
    </Box>
  );
};

schedule.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="foster">{page}</Layout>;
};
export default schedule;

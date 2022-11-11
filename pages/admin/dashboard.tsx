import AdminDashboard from '@/components/admin/dashboard';
import { thinScollbar } from '@/components/Scrollbar';
import { Box } from '@chakra-ui/react';
import Layout from 'layouts/Layout';
import { NextPageWithLayout } from 'pages/_app';
import React, { ReactElement } from 'react';

const dashboard: NextPageWithLayout = () => {
  return (
    <Box
      w="100%"
      h="90vh"
      overflowY="auto"
      mx="20px"
      sx={thinScollbar}
      p="20px"
    >
      <AdminDashboard />
    </Box>
  );
};

dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="admin">{page}</Layout>;
};

export default dashboard;

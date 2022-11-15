import AdminDashboard from '@/components/admin/dashboard';
import { thinScollbar } from '@/components/Scrollbar';
import { allCounts } from '@/services/user.service';
import { Box } from '@chakra-ui/react';
import Layout from 'layouts/Layout';
import { NextPageWithLayout } from 'pages/_app';
import React, { ReactElement } from 'react';

const dashboard: NextPageWithLayout = ({ response }: any) => {
  return (
    <Box
      w="100%"
      h="90vh"
      overflowY="auto"
      mx="20px"
      sx={thinScollbar}
      p="20px"
    >
      <AdminDashboard response={response} />
    </Box>
  );
};

export async function getServerSideProps() {
  const response = await allCounts();
  return {
    props: { response }, // will be passed to the page component as props
  };
}

dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="admin">{page}</Layout>;
};

export default dashboard;

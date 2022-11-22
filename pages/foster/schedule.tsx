import React, { ReactElement } from 'react';
import Layout from 'layouts/Layout';
import { NextPageWithLayout } from 'pages/_app';
import Index from '@/components/foster/schedule';
import { Box } from '@chakra-ui/react';
import { thinScollbar } from '@/components/Scrollbar';
import { allOrphans } from '@/services/orphans.service';

export async function getServerSideProps() {
  const { orphan } = await allOrphans();

  return {
    props: { orphan }, // will be passed to the page component as props
  };
}
const schedule: NextPageWithLayout = ({ orphan }: any) => {
  return (
    <Box
      w="100%"
      h="90vh"
      overflowY="auto"
      mx="20px"
      sx={thinScollbar}
      p="20px"
    >
      <Index orphans={orphan} />
    </Box>
  );
};

schedule.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="foster">{page}</Layout>;
};
export default schedule;

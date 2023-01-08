import { thinScollbar } from '@/components/Scrollbar';
import { schedById } from '@/services/user.service';
import { Box } from '@chakra-ui/react';
import Layout from 'layouts/Layout';
import React, { ReactElement } from 'react';

export async function getServerSideProps() {
  const response = await schedById();
  console.log(response);

  return {
    props: { response }, // will be passed to the page component as props
  };
}

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

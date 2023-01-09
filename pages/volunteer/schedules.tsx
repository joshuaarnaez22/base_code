import { thinScollbar } from '@/components/Scrollbar';
import { schedById } from '@/services/user.service';
import { Box } from '@chakra-ui/react';
import Layout from 'layouts/Layout';
import React, { ReactElement } from 'react';
import jwt_decode from 'jwt-decode';

export async function getServerSideProps(context: any) {
  const { token } = context.req.cookies;
  const { userId }: { userId: string } = jwt_decode(token);
  const response = await schedById({ volunteer_id: userId });
  console.log('sched', response);
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

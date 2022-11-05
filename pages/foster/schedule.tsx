import React, { ReactElement } from 'react';
import Layout from 'layouts/Layout';
import { NextPageWithLayout } from 'pages/_app';

const schedule: NextPageWithLayout = () => {
  return <div>schedule</div>;
};

schedule.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="foster">{page}</Layout>;
};
export default schedule;

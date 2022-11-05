import React, { ReactElement } from 'react';
import Layout from 'layouts/Layout';
import { NextPageWithLayout } from 'pages/_app';

const dashboard: NextPageWithLayout = () => {
  return <div>index</div>;
};

dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="foster">{page}</Layout>;
};
export default dashboard;

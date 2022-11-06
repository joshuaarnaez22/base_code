import Layout from 'layouts/Layout';
import { NextPageWithLayout } from 'pages/_app';
import React, { ReactElement } from 'react';

const dashboard: NextPageWithLayout = () => {
  return <div>dashboard</div>;
};

dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="admin">{page}</Layout>;
};

export default dashboard;

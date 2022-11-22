import Layout from 'layouts/Layout';
import React, { ReactElement } from 'react';

const dashboard = () => {
  return <div>dashboards</div>;
};
dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="socialworker">{page}</Layout>;
};
export default dashboard;

import Layout from 'layouts/Layout';
import { NextPageWithLayout } from 'pages/_app';
import React, { ReactElement } from 'react';

const inquiries: NextPageWithLayout = () => {
  return <div>inquiries</div>;
};

inquiries.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="admin">{page}</Layout>;
};
export default inquiries;

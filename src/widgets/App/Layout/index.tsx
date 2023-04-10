import React, { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import { Gap } from 'UI';

const Layout: FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Gap y={40} />
      <Footer />
    </div>
  );
};

export default memo(Layout);

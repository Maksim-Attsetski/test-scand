import React, { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';

import s from './Layout.module.scss';
import Header from '../Header';

const Layout: FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      footer
    </div>
  );
};

export default memo(Layout);

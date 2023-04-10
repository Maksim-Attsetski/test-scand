import React, { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';

import s from './Layout.module.scss';

const Layout: FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default memo(Layout);

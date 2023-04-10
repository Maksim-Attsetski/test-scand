import React, { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { pages } from 'pages';

import Layout from './Layout';
import { routes } from 'shared';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path={routes.Home} element={<pages.Home />} />
          <Route path={routes.Product} element={<pages.Product />} />
          <Route path={routes.Services} element={<pages.Services />} />
          <Route path={routes.About} element={<pages.About />} />
          <Route path={routes.Auth} element={<pages.Auth />} />
        </Route>
      </Routes>
    </>
  );
};

export default memo(App);

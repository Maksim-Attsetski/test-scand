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
          <Route path={routes.home} element={<pages.Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default memo(App);

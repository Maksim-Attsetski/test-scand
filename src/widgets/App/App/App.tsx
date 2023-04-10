import React, { FC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { pages } from 'pages';
import { routes } from 'shared';

import Layout from '../Layout';
import './App.scss';
import { useNews } from 'widgets/News';

const App: FC = () => {
  // eslint-disable-next-line no-empty-pattern
  const {} = useNews(true);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path={routes.Home} element={<pages.Home />} />
          <Route path={routes.News + ':id'} element={<pages.NewsItem />} />
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

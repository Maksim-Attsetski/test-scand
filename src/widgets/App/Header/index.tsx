import React, { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';

import { Logo, routes } from 'shared';
import { Button, Flex, Gap } from 'UI';

import s from './Header.module.scss';

const headerRoutes = [
  { text: 'Product', to: routes.Product },
  { text: 'Services', to: routes.Services },
  { text: 'About', to: routes.About },
];

const Header: FC = () => {
  return (
    <header className={[s.header, 'container'].join(' ')}>
      <Flex justify='space-between'>
        <Logo />
        <Flex gap='15px 15px'>
          {headerRoutes.map(({ text, to }) => (
            <NavLink className={s.link} to={to} key={to}>
              {text}
            </NavLink>
          ))}
          <Gap x={10} />
          <Button to={routes.Auth} colotType='outline'>
            Log In
          </Button>
        </Flex>
      </Flex>
    </header>
  );
};

export default memo(Header);

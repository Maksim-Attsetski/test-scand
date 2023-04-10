import React, { FC, memo } from 'react';

import s from './Header.module.scss';
import { imgs } from 'assets';
import { routes } from 'shared';
import { NavLink } from 'react-router-dom';
import { Button, Flex, Gap } from 'UI';

const headerRoutes = [
  { text: 'Product', to: routes.Product },
  { text: 'Services', to: routes.Services },
  { text: 'About', to: routes.About },
];
// { text: '', to: routes.auth, isBtn: true },

const Header: FC = () => {
  return (
    <header className={[s.header, 'container'].join(' ')}>
      <Flex justify='space-between'>
        <img className={s.logo} src={imgs.logo} alt='Logo' />
        <Flex gap='15px 15px'>
          {headerRoutes.map(({ text, to }) => (
            <NavLink className={s.link} to={to} key={to}>
              {text}
            </NavLink>
          ))}
          <Gap x={10} />
          <Button colotType='outline'>Log In</Button>
        </Flex>
      </Flex>
    </header>
  );
};

export default memo(Header);

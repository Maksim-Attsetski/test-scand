import React, { FC, memo } from 'react';

import s from './Header.module.scss';
import { imgs } from 'assets';
import { routes } from 'shared';
import { NavLink } from 'react-router-dom';

const headerRoutes = [
  { text: 'Product', to: routes.Product },
  { text: 'Services', to: routes.Services },
  { text: 'About', to: routes.About },
];
// { text: '', to: routes.auth, isBtn: true },

const Header: FC = () => {
  return (
    <div>
      <img src={imgs.logo} alt='Logo' />
      <div>
        {headerRoutes.map(({ text, to }) => (
          <NavLink to={to} key={to}>
            {text}
          </NavLink>
        ))}
        <button>Log In</button>
      </div>
    </div>
  );
};

export default memo(Header);

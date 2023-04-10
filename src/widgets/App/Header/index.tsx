import React, { FC, memo, useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Logo, routes } from 'shared';
import { Button, Flex, Gap } from 'UI';

import s from './Header.module.scss';
import { svg } from 'assets';

const headerRoutes = [
  { text: 'Product', to: routes.Product },
  { text: 'Services', to: routes.Services },
  { text: 'About', to: routes.About },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const renderContent = useCallback(
    (className: string) => (
      <Flex gap='15px 15px' className={className}>
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
    ),
    []
  );

  return (
    <header
      className={[s.header, isOpen ? s.active : '', 'container'].join(' ')}
    >
      <Flex justify='space-between'>
        <Logo />
        {renderContent(s.content)}

        <div className={s.burger}>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className={s.burgerButton}
          >
            <svg.Burger /> {isOpen ? 'Close' : 'Open'}
          </button>
          <Gap y={15} />
          <div className={s.burgerBody}>
            <div onClick={() => setIsOpen(false)}>
              <svg.Burger /> Close
            </div>
            {renderContent('')}
          </div>
        </div>
      </Flex>
    </header>
  );
};

export default memo(Header);

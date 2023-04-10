import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { Flex, Gap } from 'UI';
import { Logo, routes } from 'shared';

import s from './Footer.module.scss';

const links = [
  {
    title: 'Landings',
    routes: [
      { to: routes.Home, text: 'Home' },
      { to: routes.Product, text: 'Products' },
      { to: routes.Services, text: 'Services' },
    ],
  },
  {
    title: 'Company',
    routes: [
      { to: routes.Home, text: 'Home' },
      { to: routes.Careers, text: 'Careers', message: 'Hiring!' },
      { to: routes.Services, text: 'Services' },
    ],
  },
  {
    title: 'Resources',
    routes: [
      { to: routes.Blog, text: 'Blog' },
      { to: routes.Product, text: 'Products' },
      { to: routes.Services, text: 'Services' },
    ],
  },
];

const Footer: FC = () => {
  return (
    <footer className='container'>
      <Flex gap='50px' justify='space-between'>
        <div className={s.info}>
          <Logo />
          <Gap y={20} />
          <div className={s.infoText}>
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </div>
          <Gap y={50} />
          <div>All rights reserved.</div>
        </div>
        <Flex gap='40px' className={s.links}>
          {links.map(({ title, routes }) => (
            <div key={title}>
              <h4 className={s.title}>{title}</h4>
              <Gap y={20} />
              <Flex col justify='center' gap='30px'>
                {routes.map(({ text, to, message }) => (
                  <Link to={to} key={to}>
                    {text}
                    {message && <span className={s.message}>{message}</span>}
                  </Link>
                ))}
              </Flex>
            </div>
          ))}
        </Flex>
      </Flex>
    </footer>
  );
};

export default memo(Footer);

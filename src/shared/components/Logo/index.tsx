import React, { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { imgs } from 'assets';
import { routes } from 'shared';

import s from './Logo.module.scss';

const Logo: FC = () => {
  const navigate = useNavigate();

  return (
    <img
      onClick={() => navigate(routes.Home)}
      className={s.logo}
      src={imgs.logo}
      alt='Logo'
    />
  );
};

export default memo(Logo);

import React, { FC, memo } from 'react';

import { IUser } from 'widgets/News';
import { Flex } from 'UI';

import s from './NewsAuthor.module.scss';

interface IProps {
  user: IUser;
}

const NewsAuthor: FC<IProps> = ({ user }) => {
  return (
    <Flex>
      <img className={s.avatar} src={user.avatar} alt={user.fullName} />
      <div className={s.name}>{user.fullName}</div>
    </Flex>
  );
};

export default memo(NewsAuthor);

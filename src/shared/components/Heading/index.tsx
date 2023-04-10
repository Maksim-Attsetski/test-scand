import React, { FC, memo } from 'react';
import s from './Heading.module.scss';
import { Flex } from 'UI';

interface IProps {
  title?: string;
  subTitle?: string;
}

const Heading: FC<IProps> = ({ title, subTitle }) => {
  return (
    <Flex col>
      {subTitle && <div className={s.subTitle}>{subTitle}</div>}
      {title && <div className={s.title}>{title}</div>}
    </Flex>
  );
};

export default memo(Heading);

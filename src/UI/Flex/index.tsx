import React, { FC, memo, PropsWithChildren } from 'react';
import s from './Flex.module.scss';

interface IProps extends PropsWithChildren {
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between'; // add more if it need
  gap?: string;
  className?: string;
  col?: boolean;
}

const Flex: FC<IProps> = ({
  className = '',
  gap = '10px 10px',
  justify = 'flex-start',
  col = false,
  children,
}) => {
  return (
    <div
      className={[s.flex, className].join(' ')}
      style={{
        justifyContent: justify,
        gap,
        flexDirection: col ? 'column' : 'row',
      }}
    >
      {children}
    </div>
  );
};

export default memo(Flex);

import { Gap } from 'UI';
import React, { FC, memo } from 'react';
import { Heading } from 'shared';

const Home: FC = () => {
  return (
    <div>
      <Gap y={20} />
      <Heading title='Thoughts and words' subTitle='Blog' />
    </div>
  );
};

export default memo(Home);

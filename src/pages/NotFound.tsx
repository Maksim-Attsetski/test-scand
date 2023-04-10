import React, { FC, memo } from 'react';

import { Heading } from 'shared';

const NotFound: FC = () => {
  return (
    <div className='container'>
      <Heading title='This page was not found' />
    </div>
  );
};

export default memo(NotFound);

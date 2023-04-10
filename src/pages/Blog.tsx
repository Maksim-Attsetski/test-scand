import React, { FC, memo } from 'react';

import { NewsList, useNews } from 'widgets/News';
import { Heading } from 'shared';
import { Gap } from 'UI';

const Blog: FC = () => {
  const { news } = useNews(true);
  return (
    <div className='container'>
      <Heading title='Incredible News!' />
      <Gap y={50} />
      <NewsList newsList={news} />
    </div>
  );
};

export default memo(Blog);

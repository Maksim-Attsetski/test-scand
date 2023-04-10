import React, { FC, memo } from 'react';

import { useNews } from 'widgets/News';
import { Flex } from 'UI';
import NewsItem from '../NewsItem';

const NewsList: FC = () => {
  const { news } = useNews();
  return (
    <Flex gap='50px 30px' align='flex-start' justify='space-between'>
      {news.map((el) => (
        <NewsItem key={el.id} news={el} />
      ))}
    </Flex>
  );
};

export default memo(NewsList);

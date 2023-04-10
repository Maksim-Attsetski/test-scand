import React, { FC, memo } from 'react';
import { useNews } from 'widgets/News';

import s from './NewsList.module.scss';
import NewsItem from '../NewsItem';
import { Flex } from 'UI';

const NewsList: FC = () => {
  const { news } = useNews(true);
  return (
    <Flex gap='50px 30px' align='flex-start' justify='space-between'>
      {news.map((el) => (
        <NewsItem key={el.id} news={el} />
      ))}
    </Flex>
  );
};

export default memo(NewsList);

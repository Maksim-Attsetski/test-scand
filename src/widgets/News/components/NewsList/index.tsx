import React, { FC, memo, useMemo } from 'react';

import { INews, useNews } from 'widgets/News';
import { Flex } from 'UI';
import NewsItem from '../NewsItem';

interface IProps {
  newsList?: INews[];
}

const NewsList: FC<IProps> = ({ newsList }) => {
  const { news } = useNews();

  const allNews = useMemo(() => newsList ?? news, [news, newsList]);

  return (
    <Flex gap='50px 30px' align='flex-start' justify='space-between'>
      {allNews.map((el) => (
        <NewsItem key={el.id} news={el} />
      ))}
    </Flex>
  );
};

export default memo(NewsList);

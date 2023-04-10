import React, { FC, memo } from 'react';
import { INews } from 'widgets/News';

import s from './NewsItem.module.scss';
import { Flex, Gap } from 'UI';
import NewsAuthor from '../NewsAuthor';
import { dateHelper } from 'shared';

interface IProps {
  news: INews;
}

const NewsItem: FC<IProps> = ({ news }) => {
  return (
    <div className={s.news}>
      <img className={s.preview} src={news.preview} alt={'Preview'} />
      <Gap y={10} />
      <Flex>
        <div className={s.category}>{news.category[0]}</div>
        <div className={s.date}>
          {dateHelper.getBeautifulDate(news.createdAt)}
        </div>
      </Flex>
      <Gap y={15} />
      <div className={s.text}>{news.text}</div>
      <Gap y={40} />
      <NewsAuthor user={news.authorId} />
    </div>
  );
};

export default memo(NewsItem);

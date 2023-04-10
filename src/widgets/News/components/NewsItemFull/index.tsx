import React, { FC, memo, useMemo } from 'react';
import s from './NewsItemFull.module.scss';
import { INews, useNews } from 'widgets/News';
import { useParams } from 'react-router-dom';
import { Heading, dateHelper } from 'shared';
import { Flex, Gap } from 'UI';

interface IProps {
  item?: INews;
}

const NewsItemFull: FC<IProps> = ({ item }) => {
  const { news } = useNews();
  const id = useParams()?.id || '';

  const curNewsItem = useMemo(
    () => (item ? item : news.find((el) => el.id === id)),
    [news, item, id]
  );

  return (
    <div className='container'>
      <Gap y={50} />
      {curNewsItem ? (
        <div className={s.newsWrapper}>
          <img
            className={s.preview}
            src={curNewsItem.preview}
            alt={'Preview'}
          />
          <div className={s.info}>
            <Flex justify='flex-start'>
              <Flex className={s.category}>
                {curNewsItem.category.join(', ')}
              </Flex>
              <div className={s.date}>
                {dateHelper.getBeautifulDate(curNewsItem.createdAt)}
              </div>
            </Flex>
            <div className={s.text}>{curNewsItem.text}</div>
          </div>
        </div>
      ) : (
        <Heading title='This news was not founded' />
      )}
      <Gap y={100} />
    </div>
  );
};

export default memo(NewsItemFull);

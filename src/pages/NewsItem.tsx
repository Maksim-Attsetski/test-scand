import React, { FC, memo } from 'react';
import { NewsItemFull } from 'widgets/News';

const NewsItem: FC = () => {
  return (
    <div>
      <NewsItemFull />
    </div>
  );
};

export default memo(NewsItem);

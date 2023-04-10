import { useEffect } from 'react';

import { useActions, usePagination, useTypedSelector } from 'shared';
import { newsService } from './service';

export const useNews = (getOnInit?: boolean) => {
  const { news } = useTypedSelector((state) => state.news);
  const { action } = useActions();

  const { limit, onLoadMore } = usePagination(6);

  const onGetNews = async () => {
    const response = await newsService.getNews({ limit });

    action.setNewsAC(response);
  };

  useEffect(() => {
    getOnInit && onGetNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getOnInit, limit]);

  return { news, onGetNews, onLoadMoreNews: onLoadMore };
};

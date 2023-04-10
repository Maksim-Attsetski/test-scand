import { useActions, useTypedSelector } from 'shared';
import { newsService } from './service';
import { useEffect } from 'react';

export const useNews = (getOnInit?: boolean) => {
  const { news } = useTypedSelector((state) => state.news);
  const { action } = useActions();

  const onGetNews = async () => {
    const response = await newsService.getNews();

    action.setNewsAC(response);
  };

  useEffect(() => {
    getOnInit && onGetNews();
  }, [getOnInit]);

  return { news, onGetNews };
};

import { useState } from 'react';

export const usePagination = (defaultLimit: number) => {
  const [limit, setLimit] = useState<number>(defaultLimit);

  const onLoadMore = () => {
    setLimit((prev) => (prev += Math.round(defaultLimit * 0.7)));
  };
  const onLoadLess = () => {
    setLimit((prev) => {
      const result = (prev -= Math.round(defaultLimit * 0.5));
      return result > defaultLimit ? result : defaultLimit;
    });
  };

  return { limit, onLoadMore, onLoadLess };
};

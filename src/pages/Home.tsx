import { Button, Flex, Gap } from 'UI';
import React, { FC, memo } from 'react';
import { Heading } from 'shared';
import { NewsList, useNews } from 'widgets/News';

const Home: FC = () => {
  const { onLoadMoreNews } = useNews(true);
  return (
    <div className='container'>
      <Gap y={20} />
      <Heading title='Thoughts and words' subTitle='Blog' />
      <Gap y={50} />
      <hr />
      <Gap y={50} />
      <div className='mini-container'>
        <h1>Latest news</h1>
        <Gap y={20} />
        <NewsList />
        <Gap y={40} />
        <Flex justify='center'>
          <Button colotType='outline' onClick={onLoadMoreNews}>
            Load more
          </Button>
        </Flex>
      </div>
    </div>
  );
};

export default memo(Home);

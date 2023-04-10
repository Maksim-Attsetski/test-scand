import { Flex } from 'UI';
import React, { FC, memo } from 'react';
import { products } from 'shared';
import { ProductItem } from 'widgets/Products';

const Product: FC = () => {
  return (
    <div className='container'>
      <Flex gap='30px'>
        {products.map((el) => (
          <ProductItem product={el} key={el.id} />
        ))}
      </Flex>
    </div>
  );
};

export default memo(Product);

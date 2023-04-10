import { Flex } from 'UI';
import React, { FC, memo, useState } from 'react';
import { products } from 'shared';
import { ProductItem } from 'widgets/Products';

const Product: FC = () => {
  const [productList, setProductList] = useState(products);
  return (
    <div className='container'>
      <Flex gap='30px'>
        {productList.map((el) => (
          <ProductItem product={el} key={el.id} />
        ))}
      </Flex>
    </div>
  );
};

export default memo(Product);

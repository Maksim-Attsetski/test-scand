import React, { FC, memo } from 'react';
import { ProductItem } from 'widgets/Products';

const Product: FC = () => {
  return (
    <div className='container'>
      <div>{/* <ProductItem /> */}</div>
    </div>
  );
};

export default memo(Product);

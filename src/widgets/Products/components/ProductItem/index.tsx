import React, { FC, memo } from 'react';

import { svg } from 'assets';
import { IProduct } from 'widgets/Products';

import s from './ProductItem.module.scss';
import { Flex } from 'UI';

interface IProps {
  product: IProduct;
}

const ProductItem: FC<IProps> = ({ product }) => {
  return (
    <div>
      <Flex>
        <svg.Star
          stroke={
            product.isLiked ? 'gold' : product.active ? 'white' : 'ligthblue'
          }
          fill={product.isLiked ? 'gold' : 'none'}
        />
        <div>Level {product.level}</div>
      </Flex>
      <div>
        <div>Requirements</div>
        {product.requirements.map(({ isDone, text }) => (
          <div key={text}>
            <span>{text}</span>
            <span>{isDone}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(ProductItem);

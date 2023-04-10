import React, { FC, memo } from 'react';

import { svg } from 'assets';
import { IProduct } from 'widgets/Products';

import s from './ProductItem.module.scss';
import { Flex, Gap } from 'UI';
import { getCurrency } from 'shared';

interface IProps {
  product: IProduct;
}

const ProductItem: FC<IProps> = ({ product }) => {
  return (
    <div className={[s.product, product.active ? s.active : ''].join(' ')}>
      <Flex justify='space-between'>
        <svg.Star
          size={30}
          stroke={
            product.isLiked ? 'gold' : product.active ? 'white' : 'lightblue'
          }
          fill={product.isLiked ? 'gold' : 'none'}
        />
        <div className={s.title}>Level {product.level}</div>
      </Flex>
      <Gap y={7} />
      <Flex col align='flex-end'>
        <div className={s.title}>Requirements</div>
        {product.requirements.map(({ isDone, text }) => (
          <Flex key={text}>
            <div className={s.requirement}>{text}</div>
            <div className={[s.circle, isDone ? s.done : ''].join(' ')}>
              {isDone}
              <span></span>
            </div>
          </Flex>
        ))}
        <Gap y={10} />
        <div>
          Annural turnover - up to{' '}
          {getCurrency(product.turnover, product.currency)}
        </div>
      </Flex>
    </div>
  );
};

export default memo(ProductItem);

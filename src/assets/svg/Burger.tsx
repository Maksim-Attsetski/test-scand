import React, { FC, memo } from 'react';

interface IProps {
  size?: number;
  fill?: string;
  stroke?: string;
}
const Burger: FC<IProps> = ({ size = 24, fill = 'none', stroke = '#333' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 48 48'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M44 22C44 12.0589 35.0457 4 24 4C12.9543 4 4 12.0589 4 22H44Z'
        fill={fill}
        stroke={stroke}
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect
        x='4'
        y='38'
        width='40'
        height='6'
        fill={fill}
        stroke={stroke}
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4 28L9.45455 32L16.7273 28L24 32L31.2727 28L38.5455 32L44 28'
        stroke={stroke}
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default memo(Burger);

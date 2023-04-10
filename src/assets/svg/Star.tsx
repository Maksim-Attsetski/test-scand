import React, { FC, memo } from 'react';

interface IProps {
  size?: number;
  fill?: string;
  stroke?: string;
}
const Star: FC<IProps> = ({ size = 24, fill = 'none', stroke = '#333' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 48 48'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z'
        fill={fill}
        stroke={stroke}
        stroke-width='4'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default memo(Star);

import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  memo,
} from 'react';

import s from './Button.module.scss';
import { routes } from 'shared';
import { useNavigate } from 'react-router-dom';

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  colotType?: 'main' | 'outline';
  to?: routes;
}

const Button: FC<Props> = ({
  colotType = 'main',
  className = '',
  to,
  ...props
}) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={(e) => (to ? navigate(to) : props.onClick)}
      {...props}
      className={[s.btn, className, s[colotType]].join(' ')}
    >
      {props.children}
    </button>
  );
};

export default memo(Button);

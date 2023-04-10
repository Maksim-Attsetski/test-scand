import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  memo,
} from 'react';

import s from './Button.module.scss';

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  colotType?: 'main' | 'outline';
}

const Button: FC<Props> = ({
  colotType = 'main',
  className = '',
  ...props
}) => {
  return (
    <button {...props} className={[s.btn, className, s[colotType]].join(' ')}>
      {props.children}
    </button>
  );
};

export default memo(Button);

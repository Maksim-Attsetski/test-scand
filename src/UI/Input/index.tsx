import React, {
  ChangeEvent,
  DetailedHTMLProps,
  Dispatch,
  FC,
  InputHTMLAttributes,
  SetStateAction,
  memo,
} from 'react';
import s from './Input.module.scss';

interface IProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  setValue: Dispatch<SetStateAction<string>>;
}

const Input: FC<IProps> = ({ setValue, ...props }) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        className={[s.input, props.className].join(' ')}
        {...props}
        onChange={onChange}
      />
    </div>
  );
};

export default memo(Input);

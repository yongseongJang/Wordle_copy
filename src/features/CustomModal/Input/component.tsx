/** @jsxImportSource @emotion/react */
import React from 'react';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/react';

import { useDebounce } from '../../../hooks';
import { customWordleActions } from '../../../actions';

function Input() {
  const dispatch = useDispatch();
  const debounce = useDebounce();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(customWordleActions.changeWordle(e.target.value));
  };

  return (
    <input
      type='text'
      placeholder='Enter Custom Word'
      maxLength={5}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        debounce(() => handleChange(e), 500)
      }
      css={inputStyle}
    />
  );
}

const inputStyle = css`
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  font-weight: 600;
`;

export default Input;

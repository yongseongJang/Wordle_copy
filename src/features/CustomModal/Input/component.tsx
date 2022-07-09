/** @jsxImportSource @emotion/react */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/react';

import { customWordleActions } from '../../../actions';
import { customWordleSelectors } from '../../../selectors';

function Input() {
  const dispatch = useDispatch();
  const word = useSelector(customWordleSelectors.selectWord);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(customWordleActions.changeWordle(e.target.value));
  };

  return (
    <input
      type='text'
      placeholder='Enter Custom Word'
      maxLength={5}
      value={word}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
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

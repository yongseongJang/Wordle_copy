/** @jsxImportSource @emotion/react */
import React from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';

import { customWordleSelectors } from '../../../selectors';

function ErrorMessage() {
  const errorMsg = useSelector(customWordleSelectors.selectErrorMsg);

  return <span css={errorMessageStyle}>{errorMsg}</span>;
}

const errorMessageStyle = css`
  font-weight: 500;
  font-size: 0.75rem;
  font-family: "'Lato', sans-serif";
  color: red;
`;

export default ErrorMessage;

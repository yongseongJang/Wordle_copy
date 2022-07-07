/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, keyframes } from '@emotion/react';

function Spinner() {
  return <div css={spinnerStyle}></div>;
}

const spinnerAnimation = keyframes`
    from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const spinnerStyle = css`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:after {
    content: '';
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 4px solid lightgray;
    border-radius: 50%;
    border-top-color: darkgray;
    animation: ${spinnerAnimation} 0.8s ease infinite;
  }
`;

export default Spinner;

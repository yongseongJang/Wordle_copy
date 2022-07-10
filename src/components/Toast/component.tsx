/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, keyframes } from '@emotion/react';

interface ToastProps {
  text: string;
}

function Toast(props: ToastProps) {
  return (
    <div css={ToastStyle}>
      <span>{props.text}</span>
    </div>
  );
}

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ToastStyle = css`
  position: absolute;
  top: 65px;
  left: 50%;
  transform: translate(-50%, 0);
  width: fit-content;
  height: fit-content;
  background-color: #000000;
  border-radius: 4px;
  padding: 10px 15px;
  font-weight: bold;
  opacity: 0;
  animation: ${fadeOut} 5s;

  > span {
    color: #ffffff;
  }
`;

export default Toast;

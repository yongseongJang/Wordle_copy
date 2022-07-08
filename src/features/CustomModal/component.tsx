/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

import { Input } from './Input';
import { GenerateButton } from './GenerateButton';
import { ErrorMessage } from './ErrorMessage';
import { Link } from './Link';

interface CustomModalProps {
  isVisible: boolean;
  onCloseBtnClick: () => void;
}

function CustomModal(props: CustomModalProps) {
  return (
    <div css={popupStyle(props.isVisible)}>
      <div css={dimmedStyle}></div>
      <div css={customModalStyle}>
        <div css={closeBtnStyle} onClick={props.onCloseBtnClick}>
          <span className='line1'></span>
          <span className='line2'></span>
        </div>
        <div css={contentStyle}>
          <h1>Make Custom Wordle</h1>
          <h2>The length of a word is 5.</h2>
          <div>
            <Input />
          </div>
          <div>
            <ErrorMessage />
          </div>
          <div>
            <Link />
          </div>
          <GenerateButton />
        </div>
      </div>
    </div>
  );
}

const popupStyle = (isVisible: boolean) => css`
  display: ${isVisible ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3500;
`;

const dimmedStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
`;

const customModalStyle = css`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 180px;
  border-radius: 20px;
  background-color: #fff;
`;

const closeBtnStyle = css`
  position: relative;
  cursor: pointer;

  > span {
    position: absolute;
    top: 20px;
    right: 15px;
    width: 15px;
    height: 3px;
  }

  > .line1 {
    transform: rotate(45deg);
    background-color: #000;
  }

  > .line2 {
    transform: rotate(-45deg);
    background-color: #000;
  }
`;

const contentStyle = css`
  text-align: center;
  margin: auto 0;
  padding-top: 10px;

  > h1 {
    font-weight: 800;
    font-size: 1.25rem;
    font-family: "'Lato', sans-serif";
  }

  > h2 {
    font-weight: 300;
    font-size: 0.75rem;
    font-family: "'Lato', sans-serif";
    padding: 7px 0;
  }

  > div {
    padding-top: 5px;
  }
`;

export default CustomModal;

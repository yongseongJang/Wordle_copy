/** @jsxImportSource @emotion/react */
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/react';

import { gameSelectors } from '../../selectors';

import { PlayTime } from './PlayTime';
import { WinNumber } from './WinNumber';
import { WinningRate } from './WinningRate';
import { Distribution } from './Distribution';

function StatisticsModal() {
  const endTime = useSelector(gameSelectors.selectEndTime);

  const [isVisible, setIsVisible] = useState<boolean>(!!endTime);

  useEffect(() => {
    if (endTime) {
      setIsVisible(true);
    }
  }, [endTime]);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <div css={popupStyle(isVisible)}>
      <div css={dimmedStyle}></div>
      <div css={statisticsModalStyle}>
        <div css={closeBtnStyle} onClick={handleClick}>
          <span className='line1'></span>
          <span className='line2'></span>
        </div>
        <div css={contentStyle}>
          <div>
            <div className='playTime'>
              <PlayTime />
            </div>
            <div className='statistics'>
              <h1>statistics</h1>
              <div>
                <WinNumber />
                <WinningRate />
              </div>
            </div>
          </div>
          <div className='distribution'>
            <Distribution />
          </div>
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

const statisticsModalStyle = css`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 300px;
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
  display: flex;
  text-align: center;
  margin: auto 0;
  padding-top: 10px;

  > div {
    display: flex;
    flex-direction: column;
  }

  .playTime {
    flex: 1;
    margin: auto 50px;
  }

  .statistics {
    flex: 1;

    > h1 {
      font-weight: 800;
      font-size: 1.25rem;
      font-family: "'Lato', sans-serif";
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    > div {
      display: flex;
      justify-content: center;
      width: 50%;
      margin: auto;
    }
  }

  .distribution {
    flex-grow: 1;
  }
`;

export default StatisticsModal;

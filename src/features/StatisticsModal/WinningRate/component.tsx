/** @jsxImportSource @emotion/react */
import React from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';

import { statisticsSelectors } from '../../../selectors';

function WinningRate() {
  const winningRate = useSelector(statisticsSelectors.selectWinningRate);

  return (
    <div css={winningRateStyle}>
      <div>
        <span>{winningRate}</span>
      </div>
      <span>% of Win</span>
    </div>
  );
}

const winningRateStyle = css`
  flex: 1;
  margin-right: 5px;

  > div {
    > span {
      font-weight: 800;
      font-size: 1.25rem;
      font-family: "'Lato', sans-serif";
    }
  }

  > span {
    font-size: 0.5rem;
  }
`;

export default WinningRate;

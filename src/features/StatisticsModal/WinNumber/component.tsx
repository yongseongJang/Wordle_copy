/** @jsxImportSource @emotion/react */
import React from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';

import { statisticsSelectors } from '../../../selectors';

function WinNumber() {
  const numberOfWin = useSelector(statisticsSelectors.selectNumberOfWin);

  return (
    <div css={winNumberStyle}>
      <div>
        <span>{numberOfWin}</span>
      </div>
      <span>games won</span>
    </div>
  );
}

const winNumberStyle = css`
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

export default WinNumber;

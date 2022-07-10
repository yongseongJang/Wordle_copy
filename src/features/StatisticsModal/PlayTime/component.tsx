/** @jsxImportSource @emotion/react */
import React from 'react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';

import { gameSelectors } from '../../../selectors';

function PlayTime() {
  const playTime = useSelector(gameSelectors.selectPlayTime);

  const time = useMemo(() => {
    if (playTime) {
      const tmp = playTime / 1000;

      let hh = String(Math.floor(tmp / 3600));
      hh = hh.length === 1 ? '0' + hh : hh;

      let mm = String(Math.floor((tmp / 60) % 60));
      mm = mm.length === 1 ? '0' + mm : mm;

      let ss = String(Math.ceil(tmp % 60));
      ss = ss.length === 1 ? '0' + ss : ss;

      return hh + ':' + mm + ':' + ss;
    } else {
      return null;
    }
  }, [playTime]);

  return (
    <div css={playTimeStyle}>
      <h5>play time</h5>
      <span>{time}</span>
    </div>
  );
}

const playTimeStyle = css`
  > h5 {
    font-weight: 800;
    font-size: 1.25rem;
    font-family: "'Lato', sans-serif";
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  > span {
    font-size: 32px;
  }
`;

export default PlayTime;

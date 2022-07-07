/** @jsxImportSource @emotion/react */
import React from 'react';
import { useCallback } from 'react';
import { css } from '@emotion/react';

import { history } from '../../utils/history';

import { Button } from '../../components';

function Home() {
  const handleClickPlayButton = useCallback(() => {
    history.replace('/game');
  }, []);

  const handleClickMakeButton = useCallback(() => {
    return false;
  }, []);

  return (
    <div css={HomeStyle}>
      <div>
        <h1>Wordle</h1>
        <Button
          text={'Make your own wordle'}
          onClick={handleClickMakeButton}
          style={{
            fontSize: '20px',
            margin: '0 auto 30px auto',
          }}
        />
        <Button
          text={'Play Random Word'}
          onClick={handleClickPlayButton}
          style={{
            fontSize: '20px',
          }}
        />
      </div>
    </div>
  );
}

const HomeStyle = css`
  display: flex;
  justify-content: center;
  height: 100%;

  > div {
    margin: auto 0;

    > h1 {
      font-family: 'Lobster', cursive;
      font-weight: 700;
      font-size: 100px;
      text-align: center;
      padding-bottom: 60px;
    }
  }
`;

export default Home;

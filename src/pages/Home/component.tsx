/** @jsxImportSource @emotion/react */
import React from 'react';
import { useState, useCallback } from 'react';
import { css } from '@emotion/react';

import { history } from '../../utils/history';

import { Button } from '../../components';
import { CustomModal } from '../../features';

function Home() {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

  const handlePlayBtnClick = useCallback(() => {
    history.replace('/game');
  }, []);

  const handleMakeBtnClick = useCallback(() => {
    setIsVisibleModal(true);
  }, []);

  const handleCloseBtnClick = useCallback(() => {
    setIsVisibleModal(!isVisibleModal);
  }, [isVisibleModal]);

  return (
    <div css={HomeStyle}>
      <div>
        <h1>Wordle</h1>
        <Button
          text={'Make your own wordle'}
          onClick={handleMakeBtnClick}
          style={{
            fontSize: '20px',
            margin: '0 auto 30px auto',
          }}
        />
        <Button
          text={'Play Random Word'}
          onClick={handlePlayBtnClick}
          style={{
            fontSize: '20px',
          }}
        />
      </div>
      <CustomModal
        isVisible={isVisibleModal}
        onCloseBtnClick={handleCloseBtnClick}
      />
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

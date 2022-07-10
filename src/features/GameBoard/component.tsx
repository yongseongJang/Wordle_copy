/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

import { Row } from './Row';

function GameBoard() {
  return (
    <div css={gameBoardStyle}>
      <div>
        {Array(6)
          .fill(null)
          .map((value, index) => {
            return <Row key={index} row={index} />;
          })}
      </div>
    </div>
  );
}

const gameBoardStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  > div {
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 7px;
    width: 350px;
    height: 420px;
  }
`;

export default GameBoard;

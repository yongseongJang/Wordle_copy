/** @jsxImportSource @emotion/react */
import React from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';

import { gameSelectors } from '../../../selectors';

import { Cell } from './Cell';
import { ValidatedCell } from './ValidatedCell';

interface RowProps {
  row: number;
}

function Row(props: RowProps) {
  const currentTimes = useSelector(gameSelectors.selectCurrentTimes);

  return (
    <div css={rowStyle}>
      {Array(5)
        .fill(null)
        .map((value, index) => {
          return props.row + 1 < currentTimes ? (
            <ValidatedCell key={index} row={props.row} column={index} />
          ) : (
            <Cell
              key={index}
              row={props.row}
              column={index}
              isFocusing={props.row + 1 === currentTimes}
            />
          );
        })}
    </div>
  );
}

const rowStyle = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 7px;
`;

export default Row;

/** @jsxImportSource @emotion/react */
import React from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';

import { gameSelectors } from '../../../../selectors';

interface CellProps {
  row: number;
  column: number;
  isFocusing: boolean;
}

function Cell(props: CellProps) {
  const spelling = useSelector(gameSelectors.selectSpelling);

  return (
    <div css={cellStyle(props.isFocusing && !!spelling[props.column])}>
      {props.isFocusing && spelling[props.column]}
    </div>
  );
}

const cellStyle = (isEntered: boolean) => css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  border: 2px solid;
  border-color: ${isEntered ? '#878a8c' : '#d3d6da'};
`;

export default Cell;

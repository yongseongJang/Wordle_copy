/** @jsxImportSource @emotion/react */
import React from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';

import { gameSelectors } from '../../../../selectors';

interface ValidatedCellProps {
  row: number;
  column: number;
}

function ValidatedCell(props: ValidatedCellProps) {
  const word = useSelector(gameSelectors.selectWord(props.row));
  const answer = useSelector(gameSelectors.selectAnswer);

  const spelling = word ? word.substring(props.column, props.column + 1) : '';

  let grade = 1;
  if (answer.substring(props.column, props.column + 1) === spelling) {
    grade = 3;
  } else if (answer.indexOf(spelling) > -1) {
    grade = 2;
  }

  return <div css={validatedCellStyle(grade)}>{spelling}</div>;
}

const validatedCellStyle = (grade) => css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
  border: 2px solid;
  border-color: ${grade === 1
    ? '#787c7e'
    : grade === 2
    ? '#c9b458'
    : '#6aaa64'};
  background-color: ${grade === 1
    ? '#787c7e'
    : grade === 2
    ? '#c9b458'
    : '#6aaa64'};
`;

export default ValidatedCell;

/** @jsxImportSource @emotion/react */
import React from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';

import { useFilling } from '../../../hooks';
import { gameSelectors } from '../../../selectors';

interface KeyProps {
  text: string;
  isLastKey: boolean;
}

function Key(props: KeyProps) {
  const { fillInBoard } = useFilling();

  const keyboard = useSelector(gameSelectors.selectKeyboard);
  const endTime = useSelector(gameSelectors.selectEndTime);

  const grade = keyboard[props.text] ? keyboard[props.text] : 0;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (endTime) return;

    fillInBoard(props.text);
  };

  return (
    <button css={keyStyle(props.isLastKey, grade)} onClick={handleClick}>
      {props.text}
    </button>
  );
}

const keyStyle = (isLastKey: boolean, grade: number) => css`
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  ${!isLastKey && 'margin: 0 6px 0 0'};
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${grade === 0
    ? '#d3d6da'
    : grade === 1
    ? '#787c7e'
    : grade === 2
    ? '#c9b458'
    : '#6aaa64'};
  border: 0px;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
`;

export default Key;

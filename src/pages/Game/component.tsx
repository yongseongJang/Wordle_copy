/** @jsxImportSource @emotion/react */
import React from 'react';
import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/react';

import { useFilling } from '../../hooks';
import { gameSelectors } from '../../selectors';
import { gameActions } from '../../actions';
import { history } from '../../utils/history';

import { GameBoard, Keyboard } from '../../features';
import { Toast } from '../../components';
import { GameState } from '../../reducers/gameReducer';

function Game() {
  const dispatch = useDispatch();
  const errorMsg = useSelector(gameSelectors.selectErrorMsg);
  const endTime = useSelector(gameSelectors.selectEndTime);
  const { fillInBoard } = useFilling();

  useLayoutEffect(() => {
    const href = window.location.href;
    const pathVariable = href.substring(href.lastIndexOf('/') + 1);
    const beforeState: GameState = JSON.parse(
      localStorage.getItem(pathVariable),
    );

    if (beforeState) {
      dispatch(gameActions.loadBeforeState(beforeState));

      return;
    }

    const customWordle = JSON.parse(localStorage.getItem('customWordle'));

    if (customWordle && customWordle[pathVariable]) {
      dispatch(gameActions.loadAnswer(customWordle[pathVariable]));
    } else if (pathVariable === 'game') {
      dispatch(gameActions.loadAnswer('world'));
    } else {
      history.replace('/');
    }
  }, []);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (endTime) return;

    fillInBoard(e.key);
  };

  return (
    <div css={gameStyle} onKeyUp={handleKeyUp} tabIndex={0}>
      {errorMsg && <Toast text={errorMsg} />}
      <div>
        <GameBoard />
        <Keyboard />
      </div>
    </div>
  );
}

const gameStyle = css`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  &:focus {
    outline: none;
  }

  > div:nth-last-child(1) {
    display: flex;
    flex-direction: column;
    margin: auto;
    height: 100%;
  }
`;

export default Game;

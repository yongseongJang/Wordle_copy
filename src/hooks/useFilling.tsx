import React from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { gameActions, statisticsActions } from '../actions';
import { gameSelectors } from '../selectors';

function useFilling() {
  const dispatch = useDispatch();

  const answer = useSelector(gameSelectors.selectAnswer);
  const spelling = useSelector(gameSelectors.selectSpelling);
  const currentTimes = useSelector(gameSelectors.selectCurrentTimes);

  const fillInBoard = useCallback(
    (key: string) => {
      const spellingLength = spelling.length;

      if (['backspace', 'delete'].indexOf(key.toLowerCase()) > -1) {
        if (spellingLength > 0) {
          dispatch(gameActions.removeSpelling());
        }

        return;
      } else if (key.toLowerCase() === 'enter') {
        if (spellingLength === 5) {
          const word = spelling.join('');

          if (answer === word) {
            dispatch(gameActions.validateWordleSuccess(word));
            dispatch(statisticsActions.updateStatistics(true, currentTimes));
          } else {
            dispatch(gameActions.validateWordle(word, currentTimes));
          }
        }

        return;
      }

      const charCodeDiff = key.charCodeAt(0) - 'a'.charCodeAt(0);

      if (spellingLength < 5 && 0 <= charCodeDiff && charCodeDiff <= 25) {
        dispatch(gameActions.addSpelling(key));
      }
    },
    [answer, spelling, currentTimes],
  );

  return {
    fillInBoard,
    answer,
  };
}

export default useFilling;

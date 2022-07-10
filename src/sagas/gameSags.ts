import { take, call, put, fork } from 'redux-saga/effects';

import { wordValidationServices } from '../services';
import { gameConstants, gameActions, statisticsActions } from '../actions';

function* requestValidateWordle(payload: { word: string; times: number }) {
  try {
    const { word, times } = payload;

    yield call(wordValidationServices.validateWord, word);

    yield put(gameActions.validateWordleFailure(word));

    if (times === 6) {
      yield put(statisticsActions.updateStatistics(false, 6));
    }
  } catch (err) {
    yield put(gameActions.foundDictionaryFailure(err.message));
  }
}

function* watchRequestValidateWordle() {
  while (true) {
    const { payload } = yield take(gameConstants.REQUEST_VALIDATE_WORDLE);
    yield call(requestValidateWordle, payload);
  }
}

export const gameSaga = [fork(watchRequestValidateWordle)];

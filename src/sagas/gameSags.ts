import { take, call, put, fork } from 'redux-saga/effects';

import { wordValidationServices } from '../services';
import { gameConstants, gameActions } from '../actions';

function* requestValidateWordle(payload: { word: string }) {
  try {
    const { word } = payload;

    yield call(wordValidationServices.validateWord, word);

    yield put(gameActions.validateWordleFailure(word));
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

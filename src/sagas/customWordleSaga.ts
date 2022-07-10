import { take, call, put, fork } from 'redux-saga/effects';

import { wordValidationServices } from '../services';
import { customWordleConstants, customWordleActions } from '../actions';
import generateRandomString from '../utils/generateRandomString';

function* requestGenerateWordle(payload: { word: string }) {
  try {
    const { word } = payload;

    yield call(wordValidationServices.validateWord, word);

    const pathVariable = generateRandomString(5);

    const customWordle = localStorage.getItem('customWordle');

    if (customWordle) {
      localStorage.setItem(
        'customWordle',
        JSON.stringify({ ...JSON.parse(customWordle), [pathVariable]: word }),
      );
    } else {
      localStorage.setItem(
        'customWordle',
        JSON.stringify({ [pathVariable]: word }),
      );
    }

    yield put(customWordleActions.generateWordleSuccess(pathVariable));
  } catch (err) {
    yield put(customWordleActions.generateWordleFailure(err.message));
  }
}

function* watchRequestGenerateWordle() {
  while (true) {
    const { payload } = yield take(
      customWordleConstants.REQUEST_GENERATE_WORDLE,
    );
    yield call(requestGenerateWordle, payload);
  }
}

export const customWordleSaga = [fork(watchRequestGenerateWordle)];

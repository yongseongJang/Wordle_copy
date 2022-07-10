import { all } from 'redux-saga/effects';
import { customWordleSaga } from './customWordleSaga';
import { gameSaga } from './gameSags';

function* rootSaga() {
  yield all([...customWordleSaga, ...gameSaga]);
}

export default rootSaga;

import { all } from 'redux-saga/effects';
import { customWordleSaga } from './customWordleSaga';

function* rootSaga() {
  yield all([...customWordleSaga]);
}

export default rootSaga;

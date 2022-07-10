import { combineReducers } from 'redux';
import { customWordleReducer } from './customWordleReducer';
import { gameReducer } from './gameReducer';
import { statisticsReducer } from './statisticsReducer';

const rootReducer = combineReducers({
  customWordleReducer,
  gameReducer,
  statisticsReducer,
});

export default rootReducer;

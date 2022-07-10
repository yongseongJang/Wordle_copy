import { combineReducers } from 'redux';
import { customWordleReducer } from './customWordleReducer';
import { gameReducer } from './gameReducer';

const rootReducer = combineReducers({
  customWordleReducer,
  gameReducer,
});

export default rootReducer;

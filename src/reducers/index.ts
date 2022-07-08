import { combineReducers } from 'redux';
import { customWordleReducer } from './customWordleReducer';

const rootReducer = combineReducers({
  customWordleReducer,
});

export default rootReducer;

import { RootState } from '../reducers/types';

const selectWord = (state: RootState) => {
  return state.customWordleReducer.word;
};

const selectErrorMsg = (state: RootState) => {
  return state.customWordleReducer.errorMsg;
};

const selectPathVariable = (state: RootState) => {
  return state.customWordleReducer.pathVariable;
};

export default {
  selectWord,
  selectErrorMsg,
  selectPathVariable,
};

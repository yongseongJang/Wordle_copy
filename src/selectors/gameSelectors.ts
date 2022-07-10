import { RootState } from '../reducers/types';

const selectSpelling = (state: RootState) => {
  return state.gameReducer.spelling.toArray();
};

const selectWord = (index: number) => (state: RootState) => {
  return state.gameReducer.words.get(index);
};

const selectCurrentTimes = (state: RootState) => {
  return state.gameReducer.words.size + 1;
};

const selectAnswer = (state: RootState) => {
  return state.gameReducer.answer;
};

const selectKeyboard = (state: RootState) => {
  return state.gameReducer.keyboard.toObject();
};

const selectErrorMsg = (state: RootState) => {
  return state.gameReducer.errorMsg;
};

const selectEndTime = (state: RootState) => {
  return state.gameReducer.endTime;
};

export default {
  selectSpelling,
  selectWord,
  selectCurrentTimes,
  selectAnswer,
  selectKeyboard,
  selectErrorMsg,
  selectEndTime,
};

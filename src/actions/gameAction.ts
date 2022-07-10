import { GameState } from '../reducers/gameReducer';

export const gameConstants = {
  ADD_SPELLING: 'ADD_SPELLING',
  REMOVE_SPELLING: 'REMOVE_SPELLING',
  REQUEST_VALIDATE_WORDLE: 'REQUEST_VALIDATE_WORDLE',
  VALIDATE_WORDLE_SUCCESS: 'VALIDATE_WORDLE_SUCCESS',
  VALIDATE_WORDLE_FAILURE: 'VALIDATE_WORDLE_FAILRE',
  FOUND_DICTIONARY_FAILURE: 'FOUND_DICTIONARY_FAILURE',
  LOAD_BEFORE_STATE: 'LOAD_BEFORE_STATE',
  LOAD_ANSWER: 'LOAD_ANSWER',
};

const addSpelling = (spelling: string) => {
  return {
    type: gameConstants.ADD_SPELLING,
    payload: {
      spelling,
    },
  };
};

const removeSpelling = () => {
  return {
    type: gameConstants.REMOVE_SPELLING,
  };
};

const validateWordle = (word: string) => {
  return {
    type: gameConstants.REQUEST_VALIDATE_WORDLE,
    payload: {
      word,
    },
  };
};

const validateWordleSuccess = (word: string) => {
  return {
    type: gameConstants.VALIDATE_WORDLE_SUCCESS,
    payload: {
      word,
    },
  };
};

const validateWordleFailure = (word: string) => {
  return {
    type: gameConstants.VALIDATE_WORDLE_FAILURE,
    payload: {
      word,
    },
  };
};

const foundDictionaryFailure = (errorMsg: string) => {
  return {
    type: gameConstants.FOUND_DICTIONARY_FAILURE,
    payload: {
      errorMsg,
    },
  };
};

const loadBeforeState = (beforeState: GameState) => {
  return {
    type: gameConstants.LOAD_BEFORE_STATE,
    payload: {
      beforeState,
    },
  };
};

const loadAnswer = (answer: string) => {
  return {
    type: gameConstants.LOAD_ANSWER,
    payload: {
      answer,
    },
  };
};

export const gameActions = {
  addSpelling,
  removeSpelling,
  validateWordle,
  validateWordleSuccess,
  validateWordleFailure,
  foundDictionaryFailure,
  loadBeforeState,
  loadAnswer,
};

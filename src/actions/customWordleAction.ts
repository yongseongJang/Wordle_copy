export const customWordleConstants = {
  CHANGE_WORD: 'CHANGE_WORD',
  RESET: 'RESET',
  REQUEST_GENERATE_WORDLE: 'REQUEST_GENERATE_WORDLE',
  GENERATE_WORDLE_SUCCESS: 'GENERATE_WORDLE_SUCCESS',
  GENERATE_WORDLE_FAILURE: 'GENERATE_WORDLE_FAILURE',
};

const changeWordle = (word: string) => {
  return {
    type: customWordleConstants.CHANGE_WORD,
    payload: {
      word,
    },
  };
};

const reset = () => {
  return {
    type: customWordleConstants.RESET,
  };
};

const generateWordle = (word: string) => {
  return {
    type: customWordleConstants.REQUEST_GENERATE_WORDLE,
    payload: {
      word,
    },
  };
};

const generateWordleSuccess = (pathVariable: string) => {
  return {
    type: customWordleConstants.GENERATE_WORDLE_SUCCESS,
    payload: {
      pathVariable,
    },
  };
};

const generateWordleFailure = (errorMsg: string) => {
  return {
    type: customWordleConstants.GENERATE_WORDLE_FAILURE,
    payload: {
      errorMsg,
    },
  };
};

export const customWordleActions = {
  changeWordle,
  reset,
  generateWordle,
  generateWordleSuccess,
  generateWordleFailure,
};

export const customWordleConstants = {
  CHANGE_WORDLE: 'CHANGE_WORD',
  REQUEST_GENERATE_WORDLE: 'REQUEST_GENERATE_WORDLE',
  GENERATE_WORDLE_SUCCESS: 'GENERATE_WORDLE_SUCCESS',
  GENERATE_WORDLE_FAILURE: 'GENERATE_WORDLE_FAILURE',
};

const changeWordle = (word: string) => {
  return {
    type: customWordleConstants.CHANGE_WORDLE,
    payload: {
      word,
    },
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
  generateWordle,
  generateWordleSuccess,
  generateWordleFailure,
};

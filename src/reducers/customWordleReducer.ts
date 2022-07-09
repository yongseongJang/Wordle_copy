import { Record } from 'immutable';
import type { RecordOf } from 'immutable';
import { customWordleConstants } from '../actions';

interface State {
  isRequesting: boolean;
  errorMsg: string;
  word: string;
  pathVariable: string;
}

const defaultValues: State = {
  isRequesting: false,
  errorMsg: null,
  word: '',
  pathVariable: null,
};

const makeCustomWordleState: Record.Factory<State> = Record(defaultValues);

export type CustomWordleState = RecordOf<State>;

const initialState: CustomWordleState = makeCustomWordleState();

export const customWordleReducer = (
  state = initialState,
  action: { type: string; payload: { [key: string]: any } },
) => {
  const { type, payload } = action;
  switch (type) {
    case customWordleConstants.CHANGE_WORD:
      return state
        .update('word', () => payload.word)
        .update('errorMsg', () => null)
        .update('pathVariable', () => null);
    case customWordleConstants.RESET:
      return initialState;
    case customWordleConstants.REQUEST_GENERATE_WORDLE:
      return state.update('isRequesting', () => true);
    case customWordleConstants.GENERATE_WORDLE_SUCCESS:
      return state
        .update('isRequesting', () => false)
        .update('pathVariable', () => payload.pathVariable);
    case customWordleConstants.GENERATE_WORDLE_FAILURE:
      return state
        .update('isRequesting', () => false)
        .update('errorMsg', () => payload.errorMsg);
    default:
      return state;
  }
};

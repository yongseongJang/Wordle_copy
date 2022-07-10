import { Record, List, Map } from 'immutable';
import type { RecordOf } from 'immutable';

import { gameConstants } from '../actions';
import gradeKeyBoard from '../utils/gradeKeyBoard';

interface State {
  isRequesting: boolean;
  errorMsg: string | null;
  answer: string;
  words: List<string>;
  spelling: List<string>;
  keyboard: Map<string, number>;
  times: number;
  startTime: number | null;
  endTime: number | null;
}

const defaultValues: State = {
  isRequesting: false,
  errorMsg: null,
  answer: 'world',
  words: List(),
  spelling: List(),
  keyboard: Map(),
  times: 0,
  startTime: null,
  endTime: null,
};

const makeGameState: Record.Factory<State> = Record(defaultValues);

export type GameState = RecordOf<State>;

const initialState: GameState = makeGameState();

export const gameReducer = (
  state = initialState,
  action: { type: string; payload: { [key: string]: any } },
) => {
  const { type, payload } = action;
  let keyboard, nextState, href;

  switch (type) {
    case gameConstants.ADD_SPELLING:
      return state
        .update('spelling', () => state.spelling.push(payload.spelling))
        .update('errorMsg', () => null);
    case gameConstants.REMOVE_SPELLING:
      return state
        .update('spelling', () => state.spelling.pop())
        .update('errorMsg', () => null);
    case gameConstants.REQUEST_VALIDATE_WORDLE:
      return state
        .update('isRequesting', () => true)
        .update('errorMsg', () => null);
    case gameConstants.VALIDATE_WORDLE_SUCCESS:
      keyboard = gradeKeyBoard(
        state.answer,
        payload.word,
        state.keyboard.toObject(),
      );

      nextState = state
        .update('isRequesting', () => false)
        .update('times', () => state.times + 1)
        .update('spelling', () => List())
        .update('words', () => state.words.push(payload.word))
        .update('keyboard', () => Map(keyboard))
        .update('endTime', () => new Date().getTime());

      href = window.location.href;

      localStorage.setItem(
        href.substring(href.lastIndexOf('/') + 1),
        JSON.stringify(nextState),
      );

      return nextState;
    case gameConstants.VALIDATE_WORDLE_FAILURE:
      keyboard = gradeKeyBoard(
        state.answer,
        payload.word,
        state.keyboard.toObject(),
      );

      nextState = state
        .update('isRequesting', () => false)
        .update('times', () => state.times + 1)
        .update('spelling', () => List())
        .update('words', () => state.words.push(payload.word))
        .update('keyboard', () => Map(keyboard));

      href = window.location.href;
      localStorage.setItem(
        href.substring(href.lastIndexOf('/') + 1),
        JSON.stringify(nextState),
      );

      return nextState;
    case gameConstants.FOUND_DICTIONARY_FAILURE:
      return state
        .update('isRequesting', () => false)
        .update('errorMsg', () => payload.errorMsg);
    case gameConstants.LOAD_BEFORE_STATE:
      const beforeState = payload.beforeState;
      return state
        .update('answer', () => beforeState.answer)
        .update('words', () => List(beforeState.words))
        .update('keyboard', () => Map(beforeState.keyboard))
        .update('times', () => beforeState.words)
        .update('startTime', () => beforeState.startTime)
        .update('endTime', () => beforeState.endTime);
    case gameConstants.LOAD_ANSWER:
      return state
        .update('answer', () => payload.answer)
        .update('startTime', () => new Date().getTime());
    default:
      return state;
  }
};

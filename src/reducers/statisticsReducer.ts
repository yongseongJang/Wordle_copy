import { Record, List } from 'immutable';
import type { RecordOf } from 'immutable';

import { statisticsConstants } from '../actions/statisticsAction';

interface State {
  totalPlayTimes: number;
  numberOfWin: number;
  winningRate: number;
  distribution: List<number>;
}

const defaultValues: State = {
  totalPlayTimes: 0,
  numberOfWin: 0,
  winningRate: 0,
  distribution: List(Array(6).fill(0)),
};

const makeStatisticsState: Record.Factory<State> = Record(defaultValues);

export type StatisticsState = RecordOf<State>;

const initialState: StatisticsState = makeStatisticsState();

export const statisticsReducer = (
  state = initialState,
  action: { type: string; payload: { [key: string]: any } },
) => {
  const { type, payload } = action;
  let nextState;
  switch (type) {
    case statisticsConstants.UPDATE_STATISTICS:
      if (payload.isWon) {
        nextState = state
          .update('totalPlayTimes', () => state.totalPlayTimes + 1)
          .update('numberOfWin', () => state.numberOfWin + 1)
          .update('winningRate', () =>
            Math.floor(
              ((state.numberOfWin + 1) / (state.totalPlayTimes + 1)) * 100,
            ),
          )
          .update('distribution', () =>
            state.distribution.set(
              payload.times - 1,
              state.distribution.get(payload.times - 1) + 1,
            ),
          );
      } else {
        nextState = state
          .update('totalPlayTimes', () => state.totalPlayTimes + 1)
          .update('winningRate', () =>
            Math.floor((state.numberOfWin / (state.totalPlayTimes + 1)) * 100),
          );
      }

      localStorage.setItem('statistics', JSON.stringify(nextState));

      return nextState;
    case statisticsConstants.LOAD_STATISTICS:
      const statistics = payload.statistics;
      return state
        .update('totalPlayTimes', () => statistics.totalPlayTimes)
        .update('numberOfWin', () => statistics.numberOfWin)
        .update('winningRate', () => statistics.winningRate)
        .update('distribution', () => List(statistics.distribution));
    default:
      return state;
  }
};

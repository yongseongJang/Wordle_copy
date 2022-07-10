import { RootState } from '../reducers/types';

const selectNumberOfWin = (state: RootState) => {
  return state.statisticsReducer.numberOfWin;
};

const selectWinningRate = (state: RootState) => {
  return state.statisticsReducer.winningRate;
};

const selectDistribution = (state: RootState) => {
  return state.statisticsReducer.distribution.toArray();
};

export default {
  selectNumberOfWin,
  selectWinningRate,
  selectDistribution,
};

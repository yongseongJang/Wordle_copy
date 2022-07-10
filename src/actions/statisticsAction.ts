import { StatisticsState } from '../reducers/statisticsReducer';

export const statisticsConstants = {
  UPDATE_STATISTICS: 'UPDATE_STATISTICS',
  LOAD_STATISTICS: 'LOAD_STATISTICS',
};

const updateStatistics = (isWon: boolean, times: number) => {
  return {
    type: statisticsConstants.UPDATE_STATISTICS,
    payload: {
      isWon,
      times,
    },
  };
};

const loadStatistics = (statistics: StatisticsState) => {
  return {
    type: statisticsConstants.LOAD_STATISTICS,
    payload: {
      statistics,
    },
  };
};

export const statisticsActions = {
  updateStatistics,
  loadStatistics,
};

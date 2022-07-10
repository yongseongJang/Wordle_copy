import { CustomWordleState } from './customWordleReducer';
import { GameState } from './gameReducer';
import { StatisticsState } from './statisticsReducer';

export interface RootState {
  customWordleReducer: CustomWordleState;
  gameReducer: GameState;
  statisticsReducer: StatisticsState;
}

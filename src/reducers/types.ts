import { CustomWordleState } from './customWordleReducer';
import { GameState } from './gameReducer';

export interface RootState {
  customWordleReducer: CustomWordleState;
  gameReducer: GameState;
}

import { GAME_STATES } from './changeGameState';

const ACTION_TYPES = {
  SCORE: 'score',
  ACTIVE_IDX: 'activeIdx',
  CLICKED_IDX: 'clickedIdx',
  GAME_STATUS: 'gameStatus',
  ALL_SCORES: 'allScores',
  RESET: 'reset',
};

const initialState = {
  score: 0,
  activeIdx: -1,
  clickedIdx: -1,
  gameStatus: GAME_STATES.waiting,
  allScores: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SCORE:
      return { ...state, score: state.score + 1 };

    case ACTION_TYPES.ACTIVE_IDX:
      return { ...state, activeIdx: payload };

    case ACTION_TYPES.CLICKED_IDX:
      return { ...state, clickedIdx: payload };

    case ACTION_TYPES.GAME_STATUS:
      return { ...state, gameStatus: payload };

    case ACTION_TYPES.ALL_SCORES:
      return {
        ...state,
        allScores: [...state.allScores, payload],
      };

    case ACTION_TYPES.RESET:
      return { ...state, score: 0, clickedIdx: -1, activeIdx: -1 };

    default:
      return state;
  }
};

export { reducer, ACTION_TYPES, initialState };

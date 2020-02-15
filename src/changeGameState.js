import { ACTION_TYPES } from './reducer';

const GAME_STATES = {
  waiting: 'waiting',
  playing: 'playing',
  pause: 'pause',
};

const changeGameState = ({ status, dispatch, payload }) => {
  const { ALL_SCORES, RESET, GAME_STATUS } = ACTION_TYPES;

  switch (status) {
    case GAME_STATES.waiting:
      dispatch({ type: ALL_SCORES, payload: payload });
      dispatch({ type: RESET });
      dispatch({
        type: GAME_STATUS,
        payload: GAME_STATES.waiting,
      });
      break;

    case GAME_STATES.playing:
      dispatch({
        type: GAME_STATUS,
        payload: GAME_STATES.playing,
      });
      break;

    case GAME_STATES.pause:
      dispatch({
        type: GAME_STATUS,
        payload: GAME_STATES.pause,
      });
      break;

    default:
      dispatch({
        type: GAME_STATUS,
        payload: GAME_STATES.pause,
      });
      break;
  }
};

export { GAME_STATES, changeGameState };

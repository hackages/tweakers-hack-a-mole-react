import React, { useReducer } from 'react';
import { ACTION_TYPES, reducer, initialState } from './reducer';
import { GAME_STATES, changeGameState } from './changeGameState';
import Button from './components/Button';
import Board from './components/Board';
import Score from './components/Score';
import ScoreTable from './components/ScoreTable';
import './static/style.css';

const { CLICKED_IDX, SCORE, ACTIVE_IDX } = ACTION_TYPES;
const { waiting, playing, pause } = GAME_STATES;

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { score, clickedIdx, activeIdx, allScores, gameStatus } = state;

  const hit = idx => {
    dispatch({ type: CLICKED_IDX, payload: idx });
    dispatch({ type: SCORE });
  };

  const changeActiveMole = () => {
    const nextActive = Math.floor(Math.random(9) * 10);
    dispatch({ type: ACTIVE_IDX, payload: nextActive });
    dispatch({ type: CLICKED_IDX, payload: -1 });
  };

  return (
    <div className='app'>
      {gameStatus === waiting || gameStatus === pause ? 'Hello World !' : ''}

      <div className='game'>
        {gameStatus === waiting || gameStatus === pause ? (
          <div>
            <Button
              className='button'
              text={gameStatus === waiting ? 'Start' : 'Resume'}
              onClick={() => changeGameState({ status: playing, dispatch })}
            />
            {allScores.length > 0 && (
              <ScoreTable
                scores={allScores.sort((a, b) => b - a).slice(0, 3)}
              />
            )}
          </div>
        ) : (
          <>
            <Board
              onClick={hit}
              changeActiveMole={changeActiveMole}
              activeIdx={activeIdx}
              clickedIdx={clickedIdx}
            />
            <div>
              <Score className={'score'} score={score} />

              <Button
                className='button'
                text='Stop'
                onClick={() => changeGameState({ status: waiting, dispatch })}
              />
              <Button
                className='button'
                text='Pause'
                onClick={() => changeGameState({ status: pause, dispatch })}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;

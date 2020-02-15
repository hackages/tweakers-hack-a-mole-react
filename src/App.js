import React, { Component } from 'react';
import './static/style.css';
import Button from './components/Button';
import Board from './components/Board';
import Score from './components/Score';
import ScoreTable from './components/ScoreTable';

const GAME_STATES = {
  waiting: 'waiting',
  playing: 'playing',
  pause: 'pause',
};

class App extends Component {
  state = {
    score: 0,
    activeIdx: -1,
    clickedIdx: -1,
    gameStatus: GAME_STATES.waiting,
    allScores: [],
  };

  hit = idx => {
    const { score } = this.state;
    this.setState({
      clickedIdx: idx,
      score: score + 1,
    });
  };

  changeGameState = status => {
    const { resetGame } = this;

    switch (status) {
      case GAME_STATES.waiting:
        const { score, allScores } = this.state;
        this.setState({
          allScores: [...allScores, score],
          gameStatus: GAME_STATES.waiting,
        });
        resetGame();
        break;
      case GAME_STATES.playing:
        this.setState({ gameStatus: GAME_STATES.playing });
        break;

      default:
        this.setState({ gameStatus: GAME_STATES.waiting });
        break;
    }
  };

  changeActiveMole = () => {
    const nextActive = Math.floor(Math.random(9) * 10);
    this.setState({
      activeIdx: nextActive,
      clickedIdx: -1,
    });
  };

  resetGame = () => {
    this.setState({
      activeIdx: -1,
      clickedIdx: -1,
      score: 0,
    });
  };

  render() {
    const { hit, changeActiveMole, changeGameState } = this;
    const { activeIdx, clickedIdx, score, gameStatus, allScores } = this.state;
    return (
      <div className='app'>
        {gameStatus === GAME_STATES.waiting || gameStatus === GAME_STATES.pause
          ? 'Hello World !'
          : ''}

        <div className='game'>
          {gameStatus === GAME_STATES.waiting ? (
            <div>
              <Button
                className='button'
                text={gameStatus === GAME_STATES.waiting ? 'Start' : 'Resume'}
                onClick={() => changeGameState('playing')}
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
                  onClick={() => changeGameState(GAME_STATES.waiting)}
                />

                <Button
                  className='button'
                  text='Pause'
                  onClick={() => changeGameState(GAME_STATES.pause)}
                />
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;

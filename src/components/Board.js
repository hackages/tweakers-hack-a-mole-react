import React, { Component } from 'react';

class Board extends Component {
  state = {
    moleHit: false,
    interval: null,
  };

  componentDidMount = () => {
    const interval = setInterval(() => {
      this.props.changeActiveMole();
      this.state.moleHit && this.setState({ moleHit: false });
    }, 1000);

    this.setState({ interval: interval });
  };

  componentWillUnmount = () => {
    const { interval } = this.state;

    clearInterval(interval);
  };

  render() {
    const { activeIdx, clickedIdx, onClick: handleClick } = this.props;
    const { moleHit } = this.state;

    return (
      <div className='board'>
        {Array.from({ length: 9 }).map((_, index) => {
          let moleClassName = index === activeIdx ? 'mole visible' : 'mole';

          return (
            <div key={index} className='board-item'>
              <div
                className={moleClassName}
                onClick={() => {
                  if (!moleHit) {
                    this.setState({ moleHit: true });
                    handleClick(index);
                  }
                }}
              />
              <div className='ground'>
                {clickedIdx === index ? <div className='hit' /> : null}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Board;

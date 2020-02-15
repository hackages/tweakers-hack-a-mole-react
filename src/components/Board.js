import React, { useState, useEffect } from 'react';

const Board = ({
  activeIdx,
  onClick: handleClick,
  clickedIdx,
  changeActiveMole,
}) => {
  const [, setinterval] = useState(0);
  const [moleHit, setmoleHit] = useState(false);

  useEffect(() => {
    const i = setInterval(() => {
      changeActiveMole();
      if (moleHit) {
        setmoleHit(false);
      }
    }, 1000);

    setinterval(i);

    return () => {
      clearInterval(i);
    };
  }, [changeActiveMole, moleHit]);

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
                  setmoleHit(true);
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
};

export default Board;

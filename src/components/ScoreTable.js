import React from 'react';
import styled from 'styled-components';

const ScoreTable = ({ scores }) => {
  return (
    <div>
      <Scoretable>
        <span>Score Board</span>
        <table className='score-table'>
          <tbody>
            {scores.map((score, idx) => {
              return (
                <tr key={idx}>
                  <Lines>{++idx}</Lines>
                  <Lines>{score} points</Lines>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Scoretable>
    </div>
  );
};

const Scoretable = styled.div`
  font-size: 1rem;
  padding: 0.6rem 0.6rem 0.7rem 0.6rem;
  color: white;
  border: 2px solid #fcb942;
  background: none;
  border-radius: 5px;
  letter-spacing: 0.13rem;
  width: 150px;
`;

const Lines = styled.th`
  padding: 0.6rem 0.6rem 0.7rem 0.6rem;
  border: 2px solid #fcb942;
`;

export default ScoreTable;

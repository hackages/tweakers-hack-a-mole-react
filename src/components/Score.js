import React from 'react';

/**
 * Use a Functional Component here because there is no state
 * so we don't need to create a class for this
 */
const Score = ({ score, className }) => (
  <div className={className}> Score: {score} </div>
);

export default Score;

// export class Score extends Component {
//   render() {
//     const {
//       props: { score, className },
//     } = this;

//     return <div className={className}> Score: {score} </div>;
//   }
// }

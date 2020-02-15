import React from 'react';

/**
 * Use a Functional Component here because there is no state
 * so we don't need to create a class for this
 */
const Button = ({ text, ...restOfProps }) => (
  <button {...restOfProps}> {text} </button>
);

export default Button;

// Solution with a class
// export class Button extends Component {
//   render() {
//     const { props } = this;
//     const { text } = props;

//     return <button {...props}> {text} </button>;
//   }
// }

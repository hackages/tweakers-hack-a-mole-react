import React from 'react';

const Button = props => {
  const { text } = props;

  return <button {...props}> {text} </button>;
};

export default Button;

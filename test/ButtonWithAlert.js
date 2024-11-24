import React, { useState } from 'react';

const ButtonWithAlert = () => {
  const [message, setMessage] = useState('Initial Message');

  const handleClick = () => {
    alert('Button clicked!');
    setMessage('Button was clicked');
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p data-testid="message">{message}</p>
    </div>
  );
};

export default ButtonWithAlert;

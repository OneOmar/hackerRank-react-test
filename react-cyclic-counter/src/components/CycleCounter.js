import React, { useState } from 'react';

const CycleCounter = ({ cycle }) => {

  const [count, setCount] = useState(0);

  // const incrementCount = () => {
  //   setCount(prevCount => (prevCount >= cycle ? 0 : prevCount + 1));
  // };

  const incrementCount = () => {
    setCount(prevCount => (prevCount + 1 >= cycle ? 0 : prevCount + 1));
  };

  return (
    <button
      data-testid="cycle-counter"
      style={{
        fontSize: '1rem',
        width: 120,
        height: 30,
      }}
      onClick={incrementCount}
    >
      {count}
    </button>
  );
};

export default CycleCounter;

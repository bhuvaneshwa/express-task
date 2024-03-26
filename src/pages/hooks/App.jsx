import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const Square = ({ number }) => {
  console.log(`Square ${number} rendered`);
  return <div>{number * number}</div>;
};

Square.propTypes = {
  number: PropTypes.number.isRequired
};

const App = () => {
  const [count, setCount] = useState(0);

  // Memoize the square of count using useMemo
  const square = useMemo(() => {
    return count * count;
  }, [count]); // Dependency count

  return (
    <div>
      <p>Count: {count}</p>
      <p>Square of Count: {square}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      {/* Render the Square component with the memoized square value */}
      <Square number={square} />
    </div>
  );
};

export default App;

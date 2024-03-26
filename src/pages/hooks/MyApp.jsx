import { useState, useCallback } from 'react';

// Generic Button component
const Button = ({ onClick, children }) => {
  console.log('Button rendered'); // This will only be logged when the component re-renders
  return <button onClick={onClick}>{children}</button>;
};

// Main App component
const MyApp = () => {
  const [count, setCount] = useState(0);

  // Define a function that increments the count
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, [setCount]); // Dependency setCount

  return (
    <div>
      <p>Count: {count}</p>
      {/* Pass the memoized function to child component */}
      <Button onClick={increment}>Increment</Button>
    </div>
  );
};

export default MyApp;

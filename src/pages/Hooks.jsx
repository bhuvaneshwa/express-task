import { useState } from 'react';
import EffectMyComponent from './hooks/EffectMyComponent';

import TextInputWithFocusButton from './hooks/TextInputWithFocusButton';

export default function Hooks() {
  const [count, setCount] = useState(0);
  return (
    <div className="m-5 bg-gray-400 p-4">
      <div>
      <h2 className="text-xl font-bold mb-4">1. Counter Example using useState</h2>
      <p className="mb-4">Count: {count}</p>
      {/* Button to increment count */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* Button to decrement count */}
      <button className="px-4 py-2 bg-red-500 text-white rounded-md mr-2" onClick={() => setCount(count - 1)}>Decrement</button>
      {/* Button to reset count */}
      <button className="px-4 py-2 bg-gray-700 text-white rounded-md" onClick={() => setCount(0)}>Reset</button>
      </div>

      <div>
        <EffectMyComponent/>
      </div>
      <div>
        <TextInputWithFocusButton/>
      </div>
      
    </div>
  );
}

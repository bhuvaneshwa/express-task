import { useState, useEffect } from "react";

export default function EffectMyComponent() {
  const [count, setCount] = useState(0);

  // useEffect runs after every render (including the first render)
  useEffect(() => {
    // Perform side effects here
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="m-5 p-4 bg-gray-200 rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-4">2. UseEffect</h1>
      <p className="mb-4">You clicked {count} times</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}

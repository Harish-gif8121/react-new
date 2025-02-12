import React, { useState } from 'react';
import './App.css'; // For optional styling

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(Math.max(0, count - 1)); // Prevent going below 0 (Bonus)
  const reset = () => setCount(0);

  return (
    <div className="app-container"> {/* Container for styling */}
      <h1>Counter</h1>
      <div className="counter-display">
        {count}
      </div>
      <div className="button-group">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
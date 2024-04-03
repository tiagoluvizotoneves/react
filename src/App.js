import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Contador: {count}
        </p>
        <button onClick={() => setCount(count + 1)}>
          Aumentar 
        </button>
        <button onClick={() => setCount(count - 1)}>
          Diminuir
        </button>
      </header>
    </div>
  );
}

export default App;

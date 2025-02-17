import React, { useState, useMemo } from 'react';

const ExpensiveComponent = React.memo(({ value }) => {
  console.log('Rendering ExpensiveComponent');
  return <div>{value}</div>;
});

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const memoizedValue = useMemo(() => {
    return `Computed: ${input}`;
  }, [input]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <ExpensiveComponent value={memoizedValue} />
    </div>
  );
}

export default App;
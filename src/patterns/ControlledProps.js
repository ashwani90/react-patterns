import React, { useState } from 'react';

const ControlledInput = ({ value, onChange }) => (
  <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
);

function App() {
  const [value, setValue] = useState('');

  return (
    <div>
      <ControlledInput value={value} onChange={setValue} />
      <p>You typed: {value}</p>
    </div>
  );
}

export default App;
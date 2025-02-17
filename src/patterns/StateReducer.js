import React, { useState } from 'react';

const toggleReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { on: !state.on };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

const useToggle = ({ reducer = toggleReducer } = {}) => {
  const [state, dispatch] = React.useReducer(reducer, { on: false });

  const toggle = () => dispatch({ type: 'TOGGLE' });

  return { on: state.on, toggle };
};

function Toggle({ reducer }) {
  const { on, toggle } = useToggle({ reducer });

  return (
    <div>
      <button onClick={toggle}>{on ? 'ON' : 'OFF'}</button>
    </div>
  );
}

function App() {
  const customReducer = (state, action) => {
    if (action.type === 'TOGGLE' && state.on) {
      return { on: false }; // Prevent turning off
    }
    return toggleReducer(state, action);
  };

  return <Toggle reducer={customReducer} />;
}

export default App;
import React from 'react';
import { useMachine } from '@xstate/react';
import { createMachine } from 'xstate';

const trafficLightMachine = createMachine({
  id: 'trafficLight',
  initial: 'red',
  states: {
    red: {
      on: { NEXT: 'green' },
    },
    green: {
      on: { NEXT: 'yellow' },
    },
    yellow: {
      on: { NEXT: 'red' },
    },
  },
});

function TrafficLight() {
  const [state, send] = useMachine(trafficLightMachine);

  return (
    <div>
      <div style={{ color: state.value === 'red' ? 'red' : 'gray' }}>Red</div>
      <div style={{ color: state.value === 'green' ? 'green' : 'gray' }}>Green</div>
      <div style={{ color: state.value === 'yellow' ? 'yellow' : 'gray' }}>Yellow</div>
      <button onClick={() => send('NEXT')}>Next</button>
    </div>
  );
}

function App() {
  return <TrafficLight />;
}

export default App;
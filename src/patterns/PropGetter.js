import React, { useState } from 'react';

const useToggle = () => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  const getTogglerProps = ({ onClick, ...props } = {}) => ({
    onClick: () => {
      onClick?.();
      toggle();
    },
    ...props,
  });

  return { on, getTogglerProps };
};

function App() {
  const { on, getTogglerProps } = useToggle();

  return (
    <div>
      <button
        {...getTogglerProps({
          onClick: () => console.log('Button clicked!'),
        })}
      >
        {on ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default App;
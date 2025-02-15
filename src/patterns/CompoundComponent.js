import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isActive: index === activeIndex,
          onClick: () => setActiveIndex(index),
        })
      )}
    </div>
  );
};

const Tab = ({ isActive, onClick, children }) => (
  <button
    style={{ fontWeight: isActive ? 'bold' : 'normal' }}
    onClick={onClick}
  >
    {children}
  </button>
);

function App() {
  return (
    <Tabs>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
    </Tabs>
  );
}

export default App;
import React, { createContext, useContext, useState } from 'react';

const AccordionContext = createContext();

const Accordion = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <AccordionContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ index, children }) => {
  const { activeIndex, setActiveIndex } = useContext(AccordionContext);
  const isOpen = activeIndex === index;

  return (
    <div>
      <button onClick={() => setActiveIndex(isOpen ? null : index)}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

function App() {
  return (
    <Accordion>
      <AccordionItem index={0}>Content 1</AccordionItem>
      <AccordionItem index={1}>Content 2</AccordionItem>
    </Accordion>
  );
}

export default App;
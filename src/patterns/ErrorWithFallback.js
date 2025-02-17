import React, { useState, useCallback } from 'react';

const ListItem = React.memo(({ item, onClick }) => {
  console.log('Rendering ListItem:', item.id);
  return <li onClick={() => onClick(item.id)}>{item.name}</li>;
});

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
  ]);

  const handleClick = useCallback((id) => {
    console.log('Item clicked:', id);
  }, []);

  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} onClick={handleClick} />
      ))}
    </ul>
  );
}

export default App;
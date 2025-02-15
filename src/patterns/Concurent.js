import React, { Suspense } from 'react';

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data loaded!');
    }, 2000);
  });
};

const resource = fetchData();

const DataComponent = () => {
  const data = resource.read(); // Simulate Suspense-compatible resource
  return <div>{data}</div>;
};

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DataComponent />
    </Suspense>
  );
}

export default App;
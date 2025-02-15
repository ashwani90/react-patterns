import React, { createContext, useContext } from 'react';

const ApiContext = createContext();

const useApi = () => useContext(ApiContext);

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
};

const ApiProvider = ({ children }) => (
  <ApiContext.Provider value={{ fetchData }}>{children}</ApiContext.Provider>
);

const DataComponent = () => {
  const { fetchData } = useApi();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetchData().then(setData);
  }, [fetchData]);

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

function App() {
  return (
    <ApiProvider>
      <DataComponent />
    </ApiProvider>
  );
}

export default App;
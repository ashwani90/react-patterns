import React, { useState, useEffect } from 'react';

const DataFetcher = ({ url, render }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return render({ data, loading });
};

function App() {
  return (
    <DataFetcher
      url="https://jsonplaceholder.typicode.com/posts"
      render={({ data, loading }) => {
        if (loading) return <div>Loading...</div>;
        return (
          <ul>
            {data.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        );
      }}
    />
  );
}

export default App;
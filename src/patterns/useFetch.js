import React, {useState, useEffect } from 'react';

const useFetch = (url) => {
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
    return {data, loading};
}

function App() {
    url = '';
    const {data, loading} = useFetch(url);
    if(loading) return <div>Loading...</div>

    return (
        <ul>
            {data.map((post) => {
                <li key={post.id}>{post.title}</li>
            })}
        </ul>
    );
}

export default App;
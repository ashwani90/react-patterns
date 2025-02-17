import React, { useEffect, useState } from 'react';

const withLoading = (WrappedComponent) => {
    return function WithLoadingComponent({ isLoading, ...props }) {
        if (isLoading) {
            return <div>Loading...</div>
        }
        return <WrappedComponent {...props} />;
    };
};

const DataFetchingComponent = ({data}) => (
    <ul>
        {data.map((item) => (
            <li key={item.id}>{item.name}</li>
        ))}
    </ul>
);

const DataFetchingWithLoading = withLoading(DataFetchingComponent);

function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setData([{id: 1, name: 'Item 1'}, { id: 2, name: "Item 2" }]);
            setIsLoading(false);
        }, 2000);
    }, [])

    return <DataFetchingWithLoading isLoading={isLoading} data={data} />;
}

export default App;
import React, {useState, useRef} from 'react';

function App() {
    const [value, setValue] = useState('');
    return (
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    );
}

export default App;

export const App2  = () => {
    const inputRef = useRef();

    const handleSubmit = () => {
        alert(inputRef.current.value);
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
import React, {useState} from 'react';

const MouseTracker = ({render}) => {
    const [position, setPosition] = useState({ x:0, y: 0});

    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
    }

    return (
        <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
            {render(position)}
        </div>
    );

};


function App() {
    return (
        <MouseTracker render={({x,y}) => (
            <h1>
                The mouse position is ({x}, {y})
            </h1>
        )} />
    );
}

export default App;
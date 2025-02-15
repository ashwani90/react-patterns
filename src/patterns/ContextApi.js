import React, {createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

const ThemeButton = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <button style={{
            backgroundColor: theme === 'light' ? '#fff' : '#333',
            color: theme === 'light' ? "#000" : '#fff',
        }}
        onClick={toggleTheme}
        >
            Toggle Theme
        </button>
    );
};

function App() {
    return (
        <ThemeProvider>
            <ThemeButton />
        </ThemeProvider>
    );
};

export default App;
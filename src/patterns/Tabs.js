import React, { useState } from 'react';

const Tabs = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return React.Children.map(children, (child, index) => 
        React.cloneElement(child, {
            isActive: index === activeIndex,
            onClick: () => setActiveIndex(index),
        })
    );
};

const Tab = ({ isActive, onClick, children }) => {
    <button style={{ fontWeight: isActive ? 'bold' : 'normal' }}
    onClick={onClick}
    >
        {children}
    </button>
}

const TabPanel = ({ isActive, children }) => (
    isActive ? <div>{children}</div> : null
);

function App() {
    return (
        <Tabs>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <TabPanel>Content for Tab 1</TabPanel>
            <TabPanel>Content for Tab 2</TabPanel>
        </Tabs>
    )
}

export default App;
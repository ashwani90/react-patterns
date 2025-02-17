import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Modal = ({children, onClose}) => {
    return ReactDOM.createPortal(
        <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            zIndex: 1000,
        }}>
            {children}
            <button onClick={onClose}>Close</button>
        </div>,
        document.getElementById('modal-root')
    );
};

function App() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            {isOpen && (
                <Modal onClose={() => setIsOpen(false)}>
                <h1>Modal Content</h1>
              </Modal>
            )}
        </div>
    )
}

export default App;
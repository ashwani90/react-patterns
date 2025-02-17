import React from 'react';

const withExtraProps = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const extraProps = { extra: 'This is an extra prop' };
    return <WrappedComponent {...props} {...extraProps} />;
  };
};

const MyComponent = ({ extra }) => (
  <div>
    <p>Extra Prop: {extra}</p>
  </div>
);

const EnhancedComponent = withExtraProps(MyComponent);

function App() {
  return <EnhancedComponent />;
}

export default App;
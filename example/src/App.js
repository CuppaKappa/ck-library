import React from 'react';

import {
  ExampleComponent,
  GreeterComponent
} from 'storybook-test';
import 'storybook-test/dist/index.css';

const App = () => {
  return (
    <>
      <ExampleComponent text="Create React Library Example 😄" />

      <GreeterComponent text="My lovely Greeter Component 😄" />
    </>
  );
};

export default App;

import React from 'react';

import {
  Button,
  Input,
  tailwindConfig,
} from 'storybook-test';
import 'storybook-test/dist/index.css';

const App = () => {
  console.log({ tailwindConfig });
  return (
    <>
      <Button />
      <Button>Medium</Button>
      <Button disabled>Disabled</Button>
      <Button variant="alt">Alt</Button>
      <Button variant="linear">Linear</Button>
      <Button variant="linear" disabled>Linear</Button>
      <Button variant="large">Large</Button>
      <Button variant="jumbo">Jumbo</Button>
      <Button variant="jumbo" disabled>Jumbo Disabled</Button>

      <Input />
      <Input
        placeholder="Placeholder"
        value="Text here"
        errors={[
          'Hint or Error Message'
        ]}
      />
    </>
  );
};

export default App;

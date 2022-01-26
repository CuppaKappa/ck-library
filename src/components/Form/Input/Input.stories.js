import React from 'react';
import { Input as InputComponent } from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CK/Form',
  component: InputComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // label: { control: 'text' }
  }
};

const Template = (args) => <InputComponent {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Input = Template.bind({});
Input.args = {
  type: 'text',
  label: 'Label',
  placeholder: 'Placeholder',
  errors: ['Hint or Error Message'],
  disabled: false,
  value: 'Text here'
};

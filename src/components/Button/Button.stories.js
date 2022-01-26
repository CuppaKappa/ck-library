import React from 'react';
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CK/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // label: { control: 'text' }
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template = (args) => (
//   <div className='flex flex-col'>
//     <h3>Default</h3>
//     <Button {...args}>{args.label}</Button>

//     <h3 className='mt-8'>Hover</h3>
//     <Button {...args} isHovered>
//       {args.label}
//     </Button>

//     <h3 className='mt-8'>Active</h3>
//     <Button {...args} isActive>
//       {args.label}
//     </Button>
//   </div>
// );

const Template = (args) => <Button {...args}>{args.label}</Button>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const MediumButton = Template.bind({});
MediumButton.args = {
  label: 'Medium Button'
};

export const AltButton = Template.bind({});
AltButton.args = {
  variant: 'alt',
  label: 'Alt Button'
};

export const LinearBlackButton = Template.bind({});
LinearBlackButton.args = {
  variant: 'linearBlack',
  label: 'Linear Black Button'
};

export const LinearWhiteButton = Template.bind({});
LinearWhiteButton.args = {
  variant: 'linearWhite',
  label: 'Linear White Button'
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  variant: 'large',
  label: 'Large Button'
};

export const JumboButton = Template.bind({});
JumboButton.args = {
  variant: 'jumbo',
  label: 'Jumbo Button'
};

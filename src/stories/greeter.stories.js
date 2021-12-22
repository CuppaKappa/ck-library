import React from 'react';

import { GreeterComponent } from '../greeter';

export default {
    title: 'Test/GreeterComponent',
    component: GreeterComponent,
};

const Template = (args) => <GreeterComponent {...args} />;

export const Example = Template.bind({});
Example.args = {
    text: 'My Greeter'
};

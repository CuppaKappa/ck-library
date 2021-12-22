import React from 'react';

import { ExampleComponent } from '../index';

export default {
    title: 'Test/ExampleComponent',
    component: ExampleComponent,
};

const Template = (args) => <ExampleComponent {...args} />;

export const Example = Template.bind({});
Example.args = {
    text: 'Test info'
};


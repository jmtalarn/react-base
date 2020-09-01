import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Content from './Content';

const ass = 'ASS';

export default {
    title: 'Components/Content',
    component: Content,
} as Meta;

const Template: Story = (args) => <Content {...args} />;

export const DefaultContent = Template.bind({});
DefaultContent.args = {};

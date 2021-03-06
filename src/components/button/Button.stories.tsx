import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';
import { Button, ButtonProps } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
    <ThemeProvider theme={theme}>
        <Button {...args} />
    </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};

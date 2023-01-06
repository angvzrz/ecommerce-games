import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from './header';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const Default = Template.bind({});

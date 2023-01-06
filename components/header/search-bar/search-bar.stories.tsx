import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SearchBar } from './search-bar';

export default {
  title: 'Components/Search Bar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar />;

export const Default = Template.bind({});

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductCard } from './product-card';


export default {
  title: 'Components/Product Card',
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard cover='' videoGameTitle='' videoGamePrice={0} />;

export const Default = Template.bind({});

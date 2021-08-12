import {Secondary, SecondaryProps} from './Secondary'
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Blocks/Secondary',
  component: Secondary,
  argTypes: {
    layout: {options: ['default', 'vertical'], control: {layout: 'select'}},
    imagePosition: {options: ['automatic', 'left', 'right'], control: {layout: 'select'}},
  },
  parameters: {
    componentSubtitle: 'The Secondary'
  }
} as Meta

const Template: Story<SecondaryProps> = (args) => <Secondary {...args} />

export const Default = Template.bind({})
Default.args = {
  layout: 'default',
  imagePosition: 'left',
  image: {
    url: 'https://source.unsplash.com/random'
  },
  title: 'Heading',
  body: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.',
  buttons: [{
    label: 'First Button',
    link: 'https://perdu.com',
    layout: 'tertiary'
  }]
}
export const WidthControl = Template.bind({})
WidthControl.args = {
  className: 'w-full',
  ...Default.args
}
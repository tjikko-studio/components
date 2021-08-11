import {Tertiary, TertiaryProps} from "./Tertiary"
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Blocks/Tertiary',
  component: Tertiary,
  argTypes: {
    type: {options: ['default', 'vertical'], control: {type: 'select'}},
    mirror: {control: {type: 'boolean'}},
    imagePosition: {options: ['automatic', 'left', 'right'], control: {type: 'select'}},
  },
  parameters: {
    componentSubtitle: 'The Tertiary'
  }
} as Meta

const Template: Story<TertiaryProps> = (args) => <Tertiary {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'default',
  imagePosition: 'left',
  image: [{
    url: 'https://source.unsplash.com/random'
  }],
  title: 'Heading',
  body: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.'
}
export const WidthControl = Template.bind({})
WidthControl.args = {
  className: 'w-80',
  ...Default.args
}

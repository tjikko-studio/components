import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import {Tertiary, TertiaryProps} from './Tertiary'

export default {
  title: 'Tjikko/blocks/Tertiary',
  component: Tertiary,
  argTypes: {
    type: {options: ['default', 'vertical'], control: {type: 'select'}},
    mirror: {control: {type: 'boolean'}},
  },
  parameters: {
    componentSubtitle: 'The Tertiary'
  }
} as Meta

const Template: Story<TertiaryProps> = (args) => <Tertiary {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'default',
  mirror: false,
  imageUrl: 'https://source.unsplash.com/random',
  head: 'Heading',
  text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.'
}
export const WidthControl = Template.bind({})
WidthControl.args = {
  className: 'w-80',
  ...Default.args
}

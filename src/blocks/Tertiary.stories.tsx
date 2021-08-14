import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import {Tertiary, TertiaryProps} from './Tertiary'

export default {
  title: 'Tjikko/Blocks/Tertiary',
  component: Tertiary,
  argTypes: {
    layout: {options: ['default', 'vertical'], control: {layout: 'select'}},
    mirror: {control: {layout: 'boolean'}},
    imagePosition: {options: ['auto', 'left', 'right'], control: {layout: 'select'}},
  },
  parameters: {
    componentSubtitle: 'The Tertiary'
  }
} as Meta

const Template: Story<TertiaryProps> = (args) => <Tertiary {...args} />

export const Default = Template.bind({})
Default.args = {
  layout: 'default',
  imagePosition: 'left',
  image: {
    url: 'https://source.unsplash.com/random',
    type: 'image'
  },
  title: 'Heading',
  body: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.'
}
export const WidthControl = Template.bind({})
WidthControl.args = {
  className: 'w-80',
  ...Default.args
}

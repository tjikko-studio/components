import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import {Primary, PrimaryProps} from './Primary'

export default {
  title: 'Tjikko/Blocks/Primary',
  component: Primary,
  argTypes: {
    type: {options: ['primary', 'secondary', 'tertiary'], control: {type: 'select'}},
    layout: {options: ['default', 'vertical'], control: {layout: 'select'}},
    imagePosition: {options: ['auto', 'left', 'right'], control: {layout: 'select'}},
  },
  parameters: {
    componentSubtitle: 'The Primary block'
  }
} as Meta

const Template: Story<PrimaryProps> = (args) => <Primary {...args} />

export const Default = Template.bind({})
Default.args = {
  type: "primary",
  layout: 'default',
  imagePosition: 'left',
  image: {
    url: 'https://source.unsplash.com/random',
    type: 'image'
  },
  title: 'Heading',
  body: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.',
  buttons: [{
    label: 'First Button',
    link: 'https://perdu.com',
    layout: 'tertiary'
  }]
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Default.args,
  type: 'secondary',
  label: 'Secondary Block'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  ...Default.args,
  type: 'tertiary',
  label: 'Tertiary Block'
}

export const WidthControl = Template.bind({})
WidthControl.args = {
  className: 'w-full',
  ...Default.args
}

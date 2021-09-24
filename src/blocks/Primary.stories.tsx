// eslint-disable-next-line no-use-before-define
import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import {Primary, PrimaryProps} from './Primary'

export default {
  title: 'Tjikko/Blocks/Primary',
  component: Primary,
  argTypes: {
    layout: {options: ['default', 'vertical'],
      control: {layout: 'select'}},
    imagePosition: {options: ['auto', 'left', 'right'],
      control: {layout: 'select'}}
  },
  parameters: {
    componentSubtitle: 'The Primary block'
  }
} as Meta

const Template: Story<PrimaryProps> = (args) => {
  return <Primary {...args} />
}

export const Default = Template.bind({})
Default.args = {
  layout: 'default',
  imagePosition: 'left',
  image: {
    url: 'https://source.unsplash.com/random',
    type: 'image'
  },
  title: 'Heading',
  // eslint-disable-next-line max-len
  body: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.',
  buttons: [
    {
      label: 'First Button',
      link: 'https://perdu.com',
      layout: 'tertiary'
    }
  ]
}
export const WidthControl = Template.bind({})
WidthControl.args = {
  className: 'w-full',
  ...Default.args
}

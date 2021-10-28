import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {Secondary, SecondaryProps} from './Secondary'

export default {
  title: 'Tjikko/Blocks/Secondary',
  component: Secondary,
  argTypes: {
    layout: {
      options: ['default', 'vertical'],
      control: {layout: 'select'}
    },
    imagePosition: {
      options: ['auto', 'left', 'right'],
      control: {layout: 'select'}
    }
  },
  parameters: {
    componentSubtitle: 'The Secondary'
  }
} as Meta

const Template: Story<SecondaryProps> = (args) => {
  return <Secondary {...args} />
}

export const Default = Template.bind({})
Default.args = {
  layout: 'default',
  imagePosition: 'left',
  image: {
    url: 'https://via.placeholder.com/1.gif/111827/111827',
    type: 'image'
  },
  title: 'Heading',
  body: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.', // eslint-disable-line max-len
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

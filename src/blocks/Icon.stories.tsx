// eslint-disable-next-line no-use-before-define
import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import {Icon, IconProps} from './Icon'

export default {
  title: 'Tjikko/Blocks/Icon',
  component: Icon,
  argTypes: {
    layout: {options: ['horizontal', 'vertical'],
      control: {layout: 'select'}}
  },
  parameters: {
    componentSubtitle: 'The Icon'
  }
} as Meta

const Template: Story<IconProps> = (args) => {
  return <Icon {...args} />
}

export const Default = Template.bind({})
Default.args = {
  layout: 'horizontal',
  image: {
    url: 'https://via.placeholder.com/56x56',
    type: 'image'
  },
  title: 'Heading',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do…'
}

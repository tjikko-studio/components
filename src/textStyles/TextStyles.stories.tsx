import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {TextStyles, TextStylesProps} from './TextStyles'

export default {
  title: 'Tjikko/Styles/Text Styles',
  component: TextStyles,
  argTypes: {},
  parameters: {
    componentSubtitle: 'The TextStyles'
  }
} as Meta

const Template: Story<TextStylesProps> = (args) => {
  return <TextStyles {...args} />
}

export const All = Template.bind({})
All.args = {
  type: 'all'
}

export const Body = Template.bind({})
Body.args = {
  type: 'body'
}

export const Headings = Template.bind({})
Headings.args = {
  type: 'heading'
}

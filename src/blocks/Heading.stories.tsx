import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {Heading, HeadingProps} from './Heading'

export default {
  title: 'Tjikko/Blocks/Heading',
  component: Heading,
  argTypes: {
    level: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {type: 'select'}
    }
  },
  parameters: {
    componentSubtitle: 'The Heading'
  }
} as Meta

const Template: Story<HeadingProps> = (args) => {
  return <Heading {...args} />
}

export const UnformattedHeading = Template.bind({})
UnformattedHeading.args = {
  text: 'Simple unformatted heading'
}

export const FormattedHeading = Template.bind({})
FormattedHeading.args = {
  level: 'h1',
  className: 'fontStyle-8xl underline',
  text: 'Big formatted heading'
}

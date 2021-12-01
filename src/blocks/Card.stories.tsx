import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {Card, CardProps} from './Card'

export default {
  title: 'Tjikko/Blocks/Card',
  component: Card,
  argTypes: {},
  parameters: {
    componentSubtitle: 'The card block',
    backgrounds: {
      default: 'dark background',
      values: [
        {
          name: 'dark background',
          value: '#000'
        }
      ]
    }
  }
} as Meta

const Template: Story<CardProps> = (args) => {
  return <Card {...args} />
}

export const Default = Template.bind({})
Default.args = {
  className: 'w-80 h-52',
  title: '01. HEADING',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscig elit ed do elusmod tempor incidedunt ut laborre et dolore magna aliqua'
}
Default.parameters = {
  themes: {default: 'Dark Mode'}
}

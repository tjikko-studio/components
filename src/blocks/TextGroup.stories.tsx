import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {TextGroup, TextGroupProps} from './TextGroup'

export default {
  title: 'Tjikko/Blocks/Text group',
  component: TextGroup,
  argTypes: {},
  parameters: {
    componentSubtitle: 'The text group block',
    backgrounds: {
      default: 'dark background',
      values: [
        {
          name: 'dark background',
          value: '#000'
        }
      ]
    }
  },
  decorators: [
    (Story) => (
      <div className="w-full grid p-4 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
    )
  ]
} as Meta

const Template: Story<TextGroupProps> = (args) => {
  return <TextGroup {...args} />
}

export const Default = Template.bind({})
Default.args = {
  title: 'Some nice heading',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscig elit ed do elusmod tempor incidedunt ut laborre et dolore magna aliqua',
  titleSize: 'default',
  textAlign: 'left',
  hasSepar: true,
  hasBackground: false,
  bgColor: '#f3f4f6',
  isElevated: false
}

export const Dark = Template.bind({})
Dark.args = Default.args
Dark.parameters = {
  themes: {default: 'Dark Mode'}
}

export const BigTitle = Template.bind({})
BigTitle.args = {
  ...Default.args,
  titleSize: 'big',
  title: 'A Big heading'
}

export const HugeTitle = Template.bind({})
HugeTitle.args = {
  ...Default.args,
  titleSize: 'huge',
  title: '100%',
  hasSepar: false,
  textAlign: 'center',
  body: 'Satisfaction graranteed'
}

export const Background = Template.bind({})
Background.args = {
  ...Default.args,
  hasBackground: true
}

export const BackgroundElevated = Template.bind({})
BackgroundElevated.args = {
  ...Background.args,
  isElevated: true
}

export const BackgroundDark = Template.bind({})
BackgroundDark.args = {
  ...Default.args,
  hasBackground: true,
  bgColor: '#171a22'
}
BackgroundDark.parameters = {
  themes: {default: 'Dark Mode'}
}

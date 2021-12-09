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
  }
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
Default.decorators = [
  (Story: any) => (
    <div className="w-full grid p-4 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  )
]

export const Dark = Template.bind({})
Dark.args = Default.args
Dark.parameters = {
  themes: {default: 'Dark Mode'}
}
Dark.decorators = Default.decorators

export const BigTitle = Template.bind({})
BigTitle.args = {
  ...Default.args,
  titleSize: 'big',
  title: 'A Big heading'
}
BigTitle.decorators = Default.decorators

export const HugeTitle = Template.bind({})
HugeTitle.args = {
  ...Default.args,
  titleSize: 'huge',
  hasSepar: false,
  textAlign: 'center',
  title: '100%',
  body: 'Satisfaction graranteed'
}
HugeTitle.decorators = Default.decorators

export const Background = Template.bind({})
Background.args = {
  ...Default.args,
  hasBackground: true
}
Background.decorators = Default.decorators

export const BackgroundElevated = Template.bind({})
BackgroundElevated.args = {
  ...Background.args,
  isElevated: true
}
BackgroundElevated.decorators = Default.decorators

export const BackgroundDark = Template.bind({})
BackgroundDark.args = {
  ...Default.args,
  hasBackground: true,
  bgColor: '#171a22'
}
BackgroundDark.parameters = {
  themes: {default: 'Dark Mode'}
}
BackgroundDark.decorators = Default.decorators

export const widthLightImage = Template.bind({})
widthLightImage.args = {
  ...Default.args,
  titleSize: 'huge',
  hasSepar: true,
  bgColor: '#171a22',
  title: '100%',
  body: 'Satisfaction graranteed',
  textAlign: 'center',
  verticalAlign: 'center',
  hasBackground: true,
  dark: true,
  contentShadow: true,
  ratio: '1/1',
  image: {
    url: 'images/image_texture_alt.jpg',
    type: 'image'
  }
}
widthLightImage.decorators = [
  (Story: any) => (
    <div className="w-full grid p-4 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <Story />
    </div>
  )
]

// eslint-disable-next-line no-use-before-define
import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import {Divider, DividerProps} from './Divider'

export default {
  title: 'Tjikko/Nav Elements/Divider',
  component: Divider,
  argTypes: {
  },
  parameters: {
    componentSubtitle: 'The Divider'
  },
  decorators: [
    (ThisStory) => {
      return (
        <div className='max-w-screen-sm h-96'>
          <ThisStory />
          <ThisStory />
          <ThisStory />
        </div>
      )
    }
  ]
} as Meta

const Template: Story<DividerProps> = (args) => {
  return <Divider {...args} />
}

export const Horizontal = Template.bind({})

Horizontal.args = {
  direction: 'horizontal'
}

export const HorizontalDark = Template.bind({})
HorizontalDark.args = {
  direction: 'horizontal',
  forceDark: true
}
HorizontalDark.parameters = {
  themes: {default: 'Dark Mode'}
}

export const Vertical = Template.bind({})
Vertical.args = {
  direction: 'vertical'
}

export const VerticalDark = Template.bind({})
VerticalDark.args = {
  direction: 'vertical',
  forceDark: true
}
VerticalDark.parameters = {
  themes: {default: 'Dark Mode'}
}

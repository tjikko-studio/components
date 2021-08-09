import React from 'react'
import {PopUpNavItem, PopUpNavItemProps} from './PopUpNavItem'
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/nav/PopUpNavItem',
  component: PopUpNavItem,
  argTypes: {
    type: {options: ['default', 'header', 'button', 'special'], control: {type: 'select'}},
  },
  parameters: {
    componentSubtitle: 'The Buttons'
  }
} as Meta

const Template: Story<PopUpNavItemProps> = (args) => <PopUpNavItem {...args} />

export const Default = Template.bind({})
Default.args = {
  caption: 'Link'
}

export const Active = Template.bind({})
Active.args = {
  isActive: true
}

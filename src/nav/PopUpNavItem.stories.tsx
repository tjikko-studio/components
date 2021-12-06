import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {PopUpNavItem, PopUpNavItemProps} from './PopUpNavItem'

export default {
  title: 'Tjikko/Nav Elements/PopUpNavItem',
  component: PopUpNavItem,
  argTypes: {
    type: {
      options: ['default', 'header', 'button', 'special'],
      control: {type: 'select'}
    }
  },
  parameters: {
    componentSubtitle: 'The Buttons'
  }
} as Meta

const Template: Story<PopUpNavItemProps> = (args) => {
  return <PopUpNavItem {...args} />
}

export const Default = Template.bind({})
Default.args = {}

export const Active = Template.bind({})
Active.args = {
  isActive: true
}

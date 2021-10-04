import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0'

import {SideNavItem, SideNavItemProps} from './SideNavItem'

export default {
  title: 'Tjikko/Nav Elements/SideNavItem',
  component: SideNavItem,
  argTypes: {
    type: {
      options: ['linkHeader', 'link', 'header'],
      control: {type: 'select'}
    },
    status: {
      options: ['default', 'active', 'hover'],
      control: {type: 'select'}
    },
    spacer: {
      control: {type: 'boolean'}
    }
  },
  parameters: {
    componentSubtitle: 'The SideNavItem'
  }
} as Meta

const Template: Story<SideNavItemProps> = (args) => {
  return <SideNavItem {...args} />
}

export const Default = Template.bind({})
Default.args = {
  type: 'linkHeader',
  status: 'default',
  spacer: false,
  text: 'Link Header'
}

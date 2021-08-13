import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import {NavItem, NavItemProps} from './NavItem'

export default {
  title: 'Tjikko/Nav Elements/NavItem',
  component: NavItem,
  argTypes: {
    styles: {options: ['default', 'default/white', 'flat'], control: {type: 'select'}},
  },
  parameters: {
    componentSubtitle: 'The Buttons NavItem'
  }
} as Meta

const Template: Story<NavItemProps> = (args) => <NavItem {...args} />

export const None = Template.bind({})
None.args = {
  styles: 'default',
  subMenu: []
}

export const SingleData = Template.bind({})
SingleData.args = {
  subMenu:
    [
      {
        groupCaption: 'Group 01',
        groups: [
          {
            name: 'Link 01',
            url: '/linkURL',
            type: 'link'
          },
          {
            name: 'Link 02',
            url: '/linkURL',
            type: 'button'
          },
          {
            name: 'Link 03',
            url: '/linkURL',
            type: 'button'
          }
        ]
      }]
}
export const MultiData = Template.bind({})
MultiData.args = {
  subMenu: [
    {
      groupCaption: 'Group 01',
      groups: [
        {
          name: 'Link 01',
          url: '/linkURL',
          type: 'link'
        },
        {
          name: 'Link 02',
          url: '/linkURL'
        },
        {
          name: 'Link 03',
          url: '/linkURL',
          type: 'button'
        }
      ]
    },
    {
      groupCaption: 'Group 02',
      groups: [
        {
          name: 'Link 01',
          url: '/linkURL',
          type: 'link'
        },
        {
          name: 'Link 02',
          url: '/linkURL'
        },
        {
          name: 'Link 03',
          url: '/linkURL',
          type: 'link'
        }
      ]
    },
    {
      groupCaption: 'Group 03',
      groups: [
        {
          name: 'Link 01',
          url: '/linkURL',
          type: 'button'
        },
        {
          name: 'Link 02',
          url: '/linkURL'
        },
        {
          name: 'Link 03',
          url: '/linkURL'
        }
      ]
    }
  ]
}

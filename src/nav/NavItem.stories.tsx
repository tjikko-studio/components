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
  dropdown: []
}

export const SingleData = Template.bind({})
SingleData.args = {
  dropdown:
    [
      {
        columnLabel: 'Group 01',
        columnContent: [
          {
            label: 'Link 01',
            link: '/linkURL',
            type: 'link'
          },
          {
            label: 'Link 02',
            link: '/linkURL',
            type: 'button'
          },
          {
            label: 'Link 03',
            link: '/linkURL',
            type: 'button'
          }
        ]
      }]
}
export const MultiData = Template.bind({})
MultiData.args = {
  dropdown: [
    {
      columnLabel: 'Group 01',
      columnContent: [
        {
          label: 'Link 01',
          link: '/linkURL',
          type: 'link'
        },
        {
          label: 'Link 02',
          link: '/linkURL'
        },
        {
          label: 'Link 03',
          link: '/linkURL',
          type: 'button'
        }
      ]
    },
    {
      columnLabel: 'Group 02',
      columnContent: [
        {
          label: 'Link 01',
          link: '/linkURL',
          type: 'link'
        },
        {
          label: 'Link 02',
          link: '/linkURL'
        },
        {
          label: 'Link 03',
          link: '/linkURL',
          type: 'link'
        }
      ]
    },
    {
      columnLabel: 'Group 03',
      columnContent: [
        {
          label: 'Link 01',
          link: '/linkURL',
          type: 'button'
        },
        {
          label: 'Link 02',
          link: '/linkURL'
        },
        {
          label: 'Link 03',
          link: '/linkURL'
        }
      ]
    }
  ]
}

import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import {ListNav, ListNavProps} from './ListNav'

export default {
  title: 'Tjikko/Nav Elements/ListNav',
  component: ListNav,
  argTypes: {
    styles: {options: ['flat', 'elevated'], control: {type: 'select'}},
  },
  parameters: {
    componentSubtitle: 'The Buttons ListNav'
  }
} as Meta

const Template: Story<ListNavProps> = (args) => <ListNav {...args} />

export const SingleData = Template.bind({})
SingleData.args = {
  listNavContent:
    [
      {
        columnLabel: 'Group 01',
        content: [
          {
            label: 'Link 01',
            link: '/linkURL',
          },
          {
            label: 'Link 02',
            link: '/linkURL',
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
  listNavContent: [
    {
      columnLabel: 'Group 01',
      content: [
        {
          label: 'Link 01',
          link: '/linkURL',
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
      content: [
        {
          label: 'Link 01',
          link: '/linkURL',
        },
        {
          label: 'Link 02',
          link: '/linkURL'
        },
        {
          label: 'Link 03',
          link: '/linkURL',
        }
      ]
    },
    {
      columnLabel: 'Group 03',
      content: [
        {
          label: 'Link 01',
          link: '/linkURL',
        },
        {
          label: 'Link 02',
          link: '/linkURL'
        },
        {
          label: 'Link 03',
          link: '/linkURL',
        }
      ]
    }
  ]
}

// eslint-disable-next-line no-use-before-define
import React from 'react'
import {SideNav, SideNavProps} from './SideNav'
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Nav Elements/SideNav',
  component: SideNav,
  argTypes: {
  },
  parameters: {
    componentSubtitle: 'The SideNav'
  }
} as Meta

const Template: Story<SideNavProps> = (args) => {
  return <SideNav {...args} />
}

export const Default = Template.bind({})
const imgSpaceSize = 1000
Default.args = {
  items: [
    {
      type: 'linkHeader',
      status: 'active',
      text: 'All',
      link: `https://i.pravatar.cc/${Math.ceil(imgSpaceSize * Math.random())}`
    },
    {
      type: 'header',
      status: 'default',
      text: 'Use case',
      link: `https://i.pravatar.cc/${Math.ceil(imgSpaceSize * Math.random())}`
    },
    {
      type: 'link',
      status: 'default',
      text: 'Event',
      link: `https://i.pravatar.cc/${Math.ceil(imgSpaceSize * Math.random())}`
    },
    {
      type: 'link',
      status: 'default',
      text: 'Sales office',
      link: `https://i.pravatar.cc/${Math.ceil(imgSpaceSize * Math.random())}`
    },
    {
      type: 'link',
      status: 'default',
      text: 'Presentation',
      link: `https://i.pravatar.cc/${Math.ceil(imgSpaceSize * Math.random())}`
    },
    {
      type: 'link',
      status: 'default',
      text: 'Remote',
      link: `https://i.pravatar.cc/${Math.ceil(imgSpaceSize * Math.random())}`
    },
    {
      type: 'header',
      status: 'default',
      text: 'Industry',
      link: `https://i.pravatar.cc/${Math.ceil(imgSpaceSize * Math.random())}`
    },
    {
      type: 'link',
      status: 'default',
      text: 'Residential',
      link: `https://i.pravatar.cc/${Math.ceil(imgSpaceSize * Math.random())}`
    },
    {
      type: 'link',
      status: 'default',
      text: 'Commercial',
      link: `https://i.pravatar.cc/${Math.ceil(imgSpaceSize * Math.random())}`
    },
    {
      type: 'link',
      status: 'default',
      text: 'Engineering',
      link: `https://i.pravatar.cc/${Math.ceil(imgSpaceSize * Math.random())}`
    },
    {
      type: 'link',
      status: 'default',
      text: 'Mix',
      link: `https://i.pravatar.cc/${Math.ceil(imgSpaceSize * Math.random())}`
    }
  ]
}

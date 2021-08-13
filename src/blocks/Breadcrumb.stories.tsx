import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import {Breadcrumb, BreadcrumbProps} from './Breadcrumb'

export default {
  title: 'Tjikko/Blocks/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    componentSubtitle: 'The Breadcrumb'
  }
} as Meta

const Template: Story<BreadcrumbProps> = ({crumbs}) => <Breadcrumb crumbs={crumbs} />

export const Default = Template.bind({})
Default.args = {
  crumbs: [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Settings',
      url: '/settings'
    },
    {
      name: 'Privacy settings',
      url: '/settings/privacy'
    }
  ]
}

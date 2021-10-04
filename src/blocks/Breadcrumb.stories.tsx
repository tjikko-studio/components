import {Meta, Story} from '@storybook/react/types-6-0'

import {Breadcrumb, BreadcrumbProps} from './Breadcrumb'

export default {
  title: 'Tjikko/Blocks/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    componentSubtitle: 'The Breadcrumb'
  }
} as Meta

const Template: Story<BreadcrumbProps> = Breadcrumb

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

import {Breadcrumb, BreadcrumbProps} from './Breadcrumb'
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/blocks/Breadcrumb',
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
      name: 'Breadcrumb',
      url: '/bread1'
    },
    {
      name: 'Breadcrumb',
      url: '/bread2'
    },
    {
      name: 'Breadcrumb',
      url: '/bread3'
    }
  ]
}

import {BreadCrumb, BreadCrumbProps} from './BreadCrumb'
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/blocks/BreadCrumb',
  component: BreadCrumb,
  parameters: {
    componentSubtitle: 'The BreadCrumb'
  }
} as Meta

const Template: Story<BreadCrumbProps> = ({crumbs}) => <BreadCrumb crumbs={crumbs} />

export const Default = Template.bind({})
Default.args = {
  crumbs: [
    {
      name: 'breadcrumb',
      url: '/bread1'
    },
    {
      name: 'breadcrumb',
      url: '/bread2'
    },
    {
      name: 'breadcrumb',
      url: '/bread3'
    }
  ]
}

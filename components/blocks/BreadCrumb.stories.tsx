import {BreadCrumb, BreadCrumbProps} from './BreadCrumb'
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/blocks/BreadCrumb',
  component: BreadCrumb,
  argTypes: {
    styles: {control: {type: 'select', options: ['fixed', 'responsive']}}
  },
  parameters: {
    componentSubtitle: 'The BreadCrumb'
  }
} as Meta

const Template: Story<BreadCrumbProps> = ({styles, crumblist}) => <BreadCrumb styles={styles} crumblist={crumblist} />

export const Default = Template.bind({})
Default.args = {
  styles: 'fixed',
  crumblist: [
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

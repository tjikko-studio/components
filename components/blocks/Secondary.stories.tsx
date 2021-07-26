import {Secondary, SecondaryProps} from './Secondary'
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/blocks/Secondary',
  component: Secondary,
  argTypes: {
    type: {control: {type: 'select', options: ['default', 'vertical']}},
    mirror: {control: {type: 'boolean'}},
  },
  parameters: {
    componentSubtitle: 'The Secondary'
  }
} as Meta

const Template: Story<SecondaryProps> = (args) => <Secondary {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'default',
  mirror: false,
  imageUrl: 'https://source.unsplash.com/random',
  head: 'Heading',
  text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.',
  cta_name: 'cta text',
  cta_url: 'https://perdu.com'
}
export const WidthControl = Template.bind({})
WidthControl.args = {
  className: 'w-full',
  ...Default.args
}

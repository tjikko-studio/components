import {FAQ, FAQProps} from "./FAQ"
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Blocks/FAQ',
  component: FAQ,
  argTypes: {

  },
  parameters: {
    componentSubtitle: 'The FAQ'
  }
} as Meta

const Template: Story<FAQProps> = (args) => <FAQ {...args} />

export const Default = Template.bind({})
Default.args = {
  question: "Quite a long question  aenean lacinia bibendum nulla sed consectetur maecenas sed diam eget risus.",
  answer: "Quite a long answer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor.  Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui."
}

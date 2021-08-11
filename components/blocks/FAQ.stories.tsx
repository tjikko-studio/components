import {Faq, FaqProps} from "./Faq"
import {Story, Meta} from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Blocks/Faq',
  component: Faq,
  argTypes: {

  },
  parameters: {
    componentSubtitle: 'The Faq'
  }
} as Meta

const Template: Story<FaqProps> = (args) => <Faq {...args} />

export const Default = Template.bind({})
Default.args = {
  content:[
    {
      question: "Quite a long question  aenean lacinia bibendum nulla sed consectetur maecenas sed diam eget risus.",
      answer: "Quite a long answer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor.  Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui."
    },
    {
      question: "Quite a long question  aenean lacinia bibendum nulla sed consectetur maecenas sed diam eget risus.",
      answer: "Quite a long answer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor.  Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui."
    },
    {
      question: "Quite a long question  aenean lacinia bibendum nulla sed consectetur maecenas sed diam eget risus.",
      answer: "Quite a long answer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor.  Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui."
    }
  ] 
}

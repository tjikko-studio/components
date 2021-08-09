import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import {FAQ, FAQProps} from './FAQ'

export default {
  title: 'Tjikko/blocks/FAQ',
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
  question: 'Quite a long question  aenean lacinia bibendum nulla sed consectetur maecenas sed diam eget risus.',
  answer: 'Quite a long answer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor.  Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.'
}
